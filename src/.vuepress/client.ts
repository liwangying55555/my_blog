import TravellingLink from './components/TravellingLink/index.vue'
import { defineClientConfig } from '@vuepress/client'

const addBusuanzi = () => {
  const script = document.createElement('script')
  script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  document.head.appendChild(script)
}

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('TravellingLink', TravellingLink)
  },
  setup() {
    addBusuanzi()
  },
})
