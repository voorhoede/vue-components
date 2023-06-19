# @voorhoede/vue-lazy-load

**Component to lazy load content using the Intersection Observer API**

This component uses the [Intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when its content enters or exists the browser's viewport. The content only loads just before it comes into view, reducing initial page weight and load time.

This component is Vapor Mode ready!

## Installation

```
npm install @voorhoede/vue-lazy-load
```

## Usage
Import the component and register it globally in your Vue instance:

```js
import { createApp } from "vue";
import App from "./App.vue";
import { VueLazyLoad } from '@voorhoede/vue-lazy-load'

const app = createApp(App);

app
  .component("vue-lazy-load", VueLazyLoad)
  .mount("#app");
```

or locally in your component:

```js
import { VueLazyLoad } from '@voorhoede/vue-lazy-load'
```

Use the component in your template:

```vue
<vue-lazy-load><b>This content is lazy loaded</b><vue-lazy-load>
```
## API

### vue-lazy-load 

#### slots 

- `default` 

- `placeholder` Content that is loaded as a placeholder until it comes into view 

#### props 

- `root-margin` ***String*** (*optional*) `default: '0px 0px 0px 0px'` 

  See IntersectionObserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) 

- `threshold` ***Number | Array*** (*optional*) `default: 0`

  See IntersectionObserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) 
