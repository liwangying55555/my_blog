import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
import { themePlugins } from './plugins.js'

export default hopeTheme({
  author: {
    name: 'Cora Wang', // 必需
    url: 'https://avatars.githubusercontent.com/u/32131278?s=460&u=500cbabe6b9eef1e9db9290adab469958cf57aee&v=4',
  },
  // icon https://fontawesome.com/search?o=r&m=free
  iconAssets: 'fontawesome-with-brands',
  logo: 'logo.png',
  docsDir: 'src',
  darkmode: 'disable',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  headerDepth: 3,
  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Repo', 'TravellingLink', 'Search'],
  },
  repo: 'liwangying55555',
  lastUpdated: true,
  footer:
    '泛泛之谈『个人娱乐』<br/> Powered by <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank"> VuePress </a> | Theme <a href="https://theme-hope.vuejs.press/zh/" target="_blank"> Hope </a>',
  copyright: 'Copyright © 2023 - 至今 鄂ICP备2023026866号-1 <br/> 本站总访问量 <span id="busuanzi_value_site_pv"></span> 次',
  displayFooter: true,
  blog: {
    avatar:
      'https://avatars.githubusercontent.com/u/32131278?s=460&u=500cbabe6b9eef1e9db9290adab469958cf57aee&v=4',
    description: '摸鱼选手',
    roundAvatar: true, // 圆形
    medias: {
      Email: 'mailto:liwangying55555@163.com',
      GitHub: 'https://github.com/liwangying55555',
    },
  },
  navbar,
  sidebar,
  plugins: themePlugins,
})
