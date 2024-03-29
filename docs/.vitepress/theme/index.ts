import Theme from 'vitepress/theme'
import './style/var.css'
import './style/rainbow.css'

import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('demo-preview', AntDesignContainer)
  }
}
