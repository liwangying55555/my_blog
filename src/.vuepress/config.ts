import { defineUserConfig } from 'vuepress'
import theme from './config/theme.js'
import { configPlugins as plugins } from './config/plugins.js'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '泛泛之谈『个人娱乐』',
  description: 'js,javascript,cp,bjyx,bjyxszd,html,css',
  port: 8000,
  plugins,
  theme,
})
