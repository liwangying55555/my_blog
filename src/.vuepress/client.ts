import TravellingLink from './components/TravellingLink/index.vue'
import 'vuepress-theme-hope/presets/bounce-icon.scss'
import { defineClientConfig } from '@vuepress/client'
// import { onBeforeUnmount, onMounted } from 'vue'
// import { setDurationTime } from './utils'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('TravellingLink', TravellingLink)
  },
  setup() {
    // let timerInterval: ReturnType<typeof setInterval> | null
    // onMounted(() => {
    //   setDurationTime()
    //   timerInterval = setInterval(() => {
    //     setDurationTime()
    //   }, 1000)
    // })
    // onBeforeUnmount(() => {
    //   if (timerInterval) clearInterval(timerInterval)
    //   timerInterval = null
    // })
  },
})
