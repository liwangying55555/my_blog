import TravellingLink from './components/TravellingLink/index.vue'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('TravellingLink', TravellingLink)
  },
  setup() {},
})
