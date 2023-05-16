<template>
  <div class="vue-dato-video" ref="root">
    <figure>
      <div
        class="vue-dato-video__background-container"
        :style="{ aspectRatio }"
      >
        <lazy-load>
          <div class="vue-dato-video__background">
            <div
              class="vue-dato-video__cover"
              :style="{
                backgroundImage: `url(${imageUrl})`,
                width: coverWidth,
              }"
            ></div>
          </div>
        </lazy-load>
        <iframe
          v-if="isPlaying"
          class="vue-dato-video__iframe"
          :src="videoUrl"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          allow="autoplay"
        >
        </iframe>
        <a
          v-if="!isPlaying"
          class="vue-dato-video__button"
          :href="video.url"
          @click.prevent="play"
        >
          <span class="vue-dato-video__a11y-sr-only">play video</span>
          <svg
            class="vue-dato-video__icon"
            xmlns="http://www.w3.org/2000/svg"
            height="60"
            width="60"
            viewBox="0 0 1200 1200"
          >
            <path
              d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65
              268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,
              600 z M 450,300.45 450,899.55 900,600 450,300.45 z"
              id="path16995"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      <figcaption class="vue-dato-video__caption" v-if="video.title">
        <a target="_blank" rel="noopener" :href="video.url">
          {{ video.title }}
        </a>
      </figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { VueLazyLoad as LazyLoad } from '@voorhoede/vue-lazy-load'

const binaryBoolean = (value: boolean) => (value ? 1 : 0)

interface Video {
  provider: string
  providerUid: string
  title?: string
  url: string
  width: number
  height: number
  thumbnailUrl: string
}

interface Props {
  video: Video
  autoplay: boolean
  loop: boolean
  mute: boolean
}

const props = defineProps<Props>()
const { video, autoplay, loop } = props

const isPlaying = ref(autoplay)
const maxRatio = 1.5
const width = ref<number>(0)
const root = ref<HTMLElement | null>(null)

const canvasHeight = computed(() => {
  // prevent canvas from getting a higher ratio than 3:2 (1.5:1)
  return Math.min(video.width * maxRatio, video.height)
})

const canvasWidth = computed(() => {
  return video.width
})

const aspectRatio = computed(() => {
  return canvasWidth.value / canvasHeight.value
})

const coverWidth = computed(() => {
  return `${((video.width * maxRatio) / video.height) * 100}%`
})

const imageUrl = computed(() => {
  const sizeRegex = /_\d+(x\d+)?\.\w+$/ // match _123.ext and _123x123.ext
  let preset = '/maxresdefault.jpg'

  switch (video.provider) {
    case 'vimeo':
      return video.thumbnailUrl.replace(sizeRegex, `_${width.value}.jpg`)
    case 'youtube':
      if (width.value < 320) {
        preset = '/mqdefault.jpg'
      } else if (width.value < 480) {
        preset = '/hqdefault.jpg'
      }
      return video.thumbnailUrl.replace('/hqdefault.jpg', preset)
    default:
      console.error(
        `unsupported video provider for cover image: ${video.provider}`
      )
      return ''
  }
})

const videoUrl = computed(() => {
  if (!isPlaying.value) return ''

  const mute = props.mute || autoplay
  const { provider, providerUid } = video

  switch (provider) {
    case 'vimeo':
      return `https://player.vimeo.com/video/${providerUid}?autoplay=1&muted=${binaryBoolean(
        mute
      )}&loop=${binaryBoolean(loop)}`
    case 'youtube':
      return `https://www.youtube.com/embed/${providerUid}?autoplay=1&mute=${binaryBoolean(
        mute
      )}&loop=${binaryBoolean(loop)}&playlist=${providerUid}`
    default:
      console.error(`unsupported video provider: ${provider}`)
      return ''
  }
})

const play = () => {
  isPlaying.value = true
}

onMounted(() => {
  const pixelRatio = window.devicePixelRatio || 1
  const cssWidth = root.value!.getBoundingClientRect().width
  width.value = cssWidth * pixelRatio
})
</script>

<style>
.vue-dato-video {
  position: relative;
}

.vue-dato-video__background-container {
  position: relative;
}

.vue-dato-video__background {
  position: absolute;
  height: 100%;
  width: 100%;
}

.vue-dato-video__cover {
  height: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center center;
}

.vue-dato-video__iframe {
  width: 100%;
  height: 100%;
  position: relative;
}

.vue-dato-video__button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.25s ease;
}

.vue-dato-video__button:hover,
.vue-dato-video__button:focus {
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.25);
}

.vue-dato-video__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vue-dato-video__caption {
  margin-top: 0.5rem;
  text-align: center;
  color: #4c4c4c;
  font-style: italic;
}

.vue-dato-video__a11y-sr-only {
  overflow: hidden;
  position: absolute;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0 0 0 0);
}
</style>
