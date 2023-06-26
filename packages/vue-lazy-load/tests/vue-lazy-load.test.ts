import { test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import VueLazyLoad from '../src/vue-lazy-load.vue'

test('Renders', () => {
  // No idea how to fix this, PR's are welcome.
  // @ts-expect-error
  const wrapper = shallowMount(VueLazyLoad)
  expect(wrapper.exists()).toBe(true)
})

test('Shows placeholder', () => {
  const placeholderHtml = '<div class="placeholder"></div>'
  // No idea how to fix this, PR's are welcome.
  // @ts-expect-error
  const wrapper = shallowMount(VueLazyLoad, {
    slots: {
      placeholder: placeholderHtml,
    },
  })

  expect(wrapper.html()).toContain(placeholderHtml)
})
