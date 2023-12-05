import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '杂记',
    icon: '',
    link: '/Moment/01.可喜可贺.md',
  },
  {
    text: '大前端',
    children: [
      {
        text: '工具类',
        children: [
          { text: 'Git', icon: '', link: '/Tool/Git' },
          { text: 'Emoji', icon: '', link: 'https://www.emojiall.com/zh-hans' },
        ],
      },
      {
        text: '前端',
        children: [
          { text: 'HTML', icon: '', link: '/FrontEnd/HTML/01.时钟' },
          // { text: 'CSS', icon: '', link: '' },
          { text: 'JavaScript', icon: '', link: '/FrontEnd/JavaScript/01.js链式调用' },
        ],
      },
      {
        text: '服务器端',
        icon: '',
        link: '/BackEnd/01.如何选择图床',
      },
    ],
  },
  {
    text: '收藏',
    icon: '',
    link: '/Focus',
  },
  {
    text: '关于我',
    icon: '',
    link: '/About',
  },
])
