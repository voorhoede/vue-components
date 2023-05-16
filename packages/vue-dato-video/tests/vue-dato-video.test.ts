import { test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import VueDatoVideo from '../src/vue-dato-video.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueDatoVideo, {
    props: {
      loop: false,
      autoplay: false,
      mute: false,
      playIconAlt: 'Play video',
      video: {
        url: 'https://www.youtube.com/watch?v=AoIq7P6DJKU',
        title: 'A Love Letter to Winter',
        width: 480,
        height: 270,
        provider: 'youtube',
        providerUid: 'AoIq7P6DJKU',
        thumbnailUrl: 'https://i.ytimg.com/vi/AoIq7P6DJKU/hqdefault.jpg',
      },
    },
  })

  expect(wrapper.exists()).toBe(true)
})
