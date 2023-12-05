import { hopeTheme } from 'vuepress-theme-hope'
import { componentsPlugin } from 'vuepress-plugin-components'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
  // hostname: "https://mister-hope.github.io",

  author: {
    name: 'Cora Wang', // 必需
    url: 'https://avatars.githubusercontent.com/u/32131278?s=460&u=500cbabe6b9eef1e9db9290adab469958cf57aee&v=4',
  },

  iconAssets: 'fontawesome-with-brands',

  logo: 'logo.png',

  // repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'src',

  // navbar
  navbar,

  darkmode: 'disable',

  // sidebar
  sidebar,

  footer: '默认页脚',
  displayFooter: true,

  blog: {
    avatar:
      'https://avatars.githubusercontent.com/u/32131278?s=460&u=500cbabe6b9eef1e9db9290adab469958cf57aee&v=4',
    description: '摸鱼选手',
    intro: '/intro.html',
    medias: {
      Email: 'mailto:280796176@qq.com',
      Gitee: 'https://gitee.com/liwangying55555',
      GitHub: 'https://github.com/liwangying55555',
      // MrHope: ['https://mister-hope.com', MR_HOPE_AVATAR],
    },
  },

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
    },
  },

  // page meta
  // metaLocales: {
  // editLink: '在 GitHub 上编辑此页',
  // },

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      component: true,

      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ['ts', 'vue'],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              }
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },
  },
})
