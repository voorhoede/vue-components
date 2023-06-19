# @voorhoede/vue-dato-video

Fully optimized video component for videos from Dato CMS.

## Features

- Supports both **Vimeo** and **YouTube**.
- Has a **fixed ratio**, so space is reserved before the video is loaded. This prevents annoying layout jumps.
- Supports an optional **video caption**.
- Has a **cover image** that lazy loads, meaning the image will only be downloaded when necessary, resulting in much faster page loads.
- Supports autoplay.
- Vapor Mode ready.

## Installation

```
npm install @voorhoede/vue-dato-video
```

## Usage
Import the component and register it globally in your Vue instance:

```js
import { createApp } from "vue";
import App from "./App.vue";
import { VueDatoVideo } from '@voorhoede/vue-dato-video'

const app = createApp(App);

app
  .component("vue-dato-video", VueDatoVideo)
  .mount("#app");
```

or locally in your component:

```js
import { VueDatoVideo } from '@voorhoede/vue-dato-video'
```

Use the component in your template:

```vue
<vue-dato-video
  :loop="false"
  :autoplay="false"
  :mute="false"
  :video="{
    url: 'https://www.youtube.com/watch?v=AoIq7P6DJKU',
    title: 'A Love Letter to Winter',
    width: 480,
    height: 270,
    provider: 'youtube',
    providerUid: 'AoIq7P6DJKU',
    thumbnailUrl: 'https://i.ytimg.com/vi/AoIq7P6DJKU/hqdefault.jpg'
  }"
/>
```

The CSS file should be imported seperately in the way you desire. It's located at `@voorhoede/vue-dato-video/dist/style.css`.

## API

### vue-dato-video 

#### props 

- `video` ***Object*** (*required*)
  - `provider` ***string*** (*required*)
  The video provider. Options: `youtube`, `vimeo`
  - `providerUid` ***string*** (*required*)
    The Uid of the video provider. 
  - `title` ***string*** (*optional*) `default: undefined`
  The title of the video.
  - `url` ***string*** (*required*)
  The url of the video.
  - `width` ***number*** (*required*)
    Width of the video.
  - `height` ***number*** (*required*)
    Height of the video.
  - `thumbnailUrl` ***string*** (*required*)
    The thumbnail url of the video.

- `autoplay` ***Boolean*** (*required*) 
  Whether the video should autoplay.

- `loop` ***Boolean*** (*required*) 
  Whether the video should loop.

- `mute` ***Boolean*** (*required*) 
  Whether the video should be muted.
