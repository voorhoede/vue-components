import DefaultTheme from 'vitepress/theme'

type Component = {
  __name: string
}

// No idea how to fix this issue, PR's are welcome.
// @ts-ignore
const modules = import.meta.globEager('../../../src/*.vue')
const components: Component[] = []

for (const path in modules) {
  components.push(modules[path].default)
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    components.forEach(component => {
      app.component(component.__name, component)
    })
  }
}