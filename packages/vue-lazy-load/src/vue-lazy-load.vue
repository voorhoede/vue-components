<template>
  <div
    class="vue-lazy-load"
    :style="{
      minWidth: '1px',
      minHeight: '1px',
    }"
    ref="root"
  >
    <slot v-if="isIntersected" />
    <!-- Content that is loaded as a placeholder until it comes into view -->
    <slot v-if="!isIntersected" name="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

interface Props {
  rootMargin?: string;
  threshold?: number | number[];
}

const { rootMargin, threshold } = withDefaults(defineProps<Props>(), {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
});

const isIntersected = ref(false);
let observer: IntersectionObserver | null = null;
const root = ref<HTMLElement | null>(null);

const observe = () => {
  const config = { root: null, rootMargin, threshold };
  observer = new IntersectionObserver(onIntersection, config);
  observer.observe(root.value!);
};

const onIntersection = (entries: IntersectionObserverEntry[]) => {
  isIntersected.value = entries.some((entry) => entry.intersectionRatio > 0);

  if (isIntersected.value) {
    unobserve();
  }
};

const unobserve = () => {
  if (observer) {
    observer.unobserve(root.value!);
  }
};

onMounted(() => {
  if ("IntersectionObserver" in window) {
    observe();
  } else {
    isIntersected.value = true;
  }
});

onBeforeUnmount(() => {
  unobserve();
});
</script>
