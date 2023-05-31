# @voorhoede/vue-dato-video

Fully optimized video component for videos from Dato CMS.

## Features

- ✅ Supports both **Vimeo** and **YouTube**.
- ✅ Has a **fixed ratio**, so space is reserved before the video is loaded. This prevents annoying layout jumps.
- ✅ Supports an optional **video caption**.
- ✅ Has a **cover image** that lazy loads, meaning the image will only be downloaded when necessary, resulting in much faster page loads.
- ✅ Supports autoplay.
- ✅ Vapor Mode ready.

## Installation

```
npm install @voorhoede/vue-dato-video
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueDatoVideo from '@voorhoede/vue-dato-video'

Vue.use(VueDatoVideo)
```

The CSS file should be imported seperately in the way you desire. It's located at `@voorhoede/vue-dato-video/dist/style.css`.

<!-- The API section is auto generated, don't touch please -->

## API

### vue-dato-video 

#### props 

- `video` ***Object*** (*required*) 

- `autoplay` ***Boolean*** (*required*) 

- `loop` ***Boolean*** (*required*) 

- `mute` ***Boolean*** (*required*) 
