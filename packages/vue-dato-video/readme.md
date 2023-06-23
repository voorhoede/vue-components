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
import { VueDatoVideo } from "@voorhoede/vue-dato-video";

const app = createApp(App);

app.component("vue-dato-video", VueDatoVideo).mount("#app");
```

or locally in your component:

```js
import { VueDatoVideo } from "@voorhoede/vue-dato-video";
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
    thumbnailUrl: 'https://i.ytimg.com/vi/AoIq7P6DJKU/hqdefault.jpg',
  }"
/>
```

The CSS file should be imported seperately in the way you desire. It's located at `@voorhoede/vue-dato-video/dist/style.css`.

## API

### vue-dato-video

#### slots

- `caption` Caption of the video

- `playIcon` Play icon of the video

#### props

- `video` **_Object_** (_required_)

  - `provider` **_string_** (_required_)
    The video provider. Options: `youtube`, `vimeo`
  - `providerUid` **_string_** (_required_)
    The Uid of the video provider.
  - `title` **_string_** (_optional_) `default: undefined`
    The title of the video.
  - `url` **_string_** (_required_)
    The url of the video.
  - `width` **_number_** (_required_)
    Width of the video.
  - `height` **_number_** (_required_)
    Height of the video.
  - `thumbnailUrl` **_string_** (_required_)
    The thumbnail url of the video.

- `autoplay` **_boolean_** (_required_)
  Whether the video should autoplay.

- `loop` **_boolean_** (_required_)
  Whether the video should loop.

- `mute` **_boolean_** (_required_)
  Whether the video should be muted.

- `playIconAlt` **_string_** (_optional_) `default: 'play video'`
  The alt text for the play icon.
