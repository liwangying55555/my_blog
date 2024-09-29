import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '大前端',
    icon: 'code',
    children: [
      {
        text: '工具类',
        children: [
          { text: 'Git', icon: '/assets/svg/git.svg', link: '/Tool/Git' },
          {
            text: 'Emoji',
            icon: '/assets/svg/emoji.svg',
            link: 'https://www.emojiall.com/zh-hans',
          },
        ],
      },
      {
        text: '前端',
        children: [
          { text: 'HTML', icon: '/assets/svg/html.svg', link: '/FrontEnd/HTML/01.时钟' },
          {
            text: 'JavaScript',
            icon: '/assets/svg/javascript.svg',
            link: '/FrontEnd/JavaScript/01.js链式调用',
          },
        ],
      },
      {
        text: '可视化3D地图',
        icon: '/assets/svg/cesium-map.svg',
        link: '/FrontEnd/Cesium/从入门到放弃(一).md',
      },
      {
        text: '服务器端',
        icon: '/assets/svg/backend.svg',
        link: '/BackEnd/01.如何选择图床',
      },
    ],
  },
  {
    text: '杂记',
    icon: 'wand-magic-sparkles',
    link: '/Moment/01.可喜可贺.md',
  },
  // {
  //   text: '收藏',
  //   icon: 'splotch',
  //   link: '/Focus',
  // },
  {
    text: '时刻',
    icon: 'splotch',
    link: '/archives',
  },
  {
    text: '关于我',
    icon: 'magnet',
    link: '/About',
  },
])
