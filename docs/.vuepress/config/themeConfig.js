const nav = require('./nav')

module.exports = {
  titleBadge: false, // 文章标题前的图标是否显示，默认true
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  logo: '', // 导航栏logo
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  sidebarOpen: false, // 初始状态是否打开侧边栏，默认true

  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状
  bodyBgImg: [
    // 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    '/img/banner03.jpg'
  ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
  updateBar: { // 最近更新栏
    showToArticle: false, // 显示到文章页底部，默认true
    moreArticle: '/' // “更多文章”跳转的页面，默认'/archives'
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://avatars.githubusercontent.com/u/32131278?s=460&u=500cbabe6b9eef1e9db9290adab469958cf57aee&v=4',
    name: 'Cora Wang',
    slogan: '摸鱼选手',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    iconfontCssFile: '//at.alicdn.com/t/font_2343660_xi0jdh3kj2.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon_youjian',
        title: '发邮件',
        link: 'mailto:280796176@qq.com',
      },
      {
        iconClass: 'icon_github',
        title: 'GitHub',
        link: 'https://github.com/liwangying55555',
      },
      {
        iconClass: 'icon_love',
        title: '回家',
        link: 'https://www.bjyxszd.com',
      },
    ],
  },
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'Cora Wang', // 必需
    link: 'https://github.com/liwangying55555', // 可选的
  },
  footer: {
    // 页脚信息
    createYear: 2020, // 博客创建年份
    copyrightInfo:
      'Cora Wang | BJYXSZD', // 博客版权信息，支持a标签
  },
  nav,
  sidebar: {
    mode: 'structuring',
    collapsable: true
  }
}