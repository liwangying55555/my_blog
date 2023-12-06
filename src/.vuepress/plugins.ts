import { PluginConfig } from 'vuepress'
import { PluginsOptions } from 'vuepress-theme-hope'
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
// import { containerPlugin } from '@vuepress/plugin-container'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
// import { renderProjects } from '../containers/projects'
// import { componentsPlugin } from 'vuepress-plugin-components'
// import { commentPlugin } from "vuepress-plugin-comment2";

// VuePress插件配置
export const configPlugins: PluginConfig = [
  // 谷歌统计插件
  // googleAnalyticsPlugin({
  //   id: 'G-GBZBT89WGJ'
  // }),
  // 搜索插件
  searchProPlugin({
    // 索引全部内容
    indexContent: true,
    // 为分类和标签添加索引
    customFields: [
      {
        getter: (page) => page.frontmatter.category,
        formatter: '分类：$content',
      },
      {
        getter: (page) => page.frontmatter.tag,
        formatter: '标签：$content',
      },
    ],
  }),
  // componentsPlugin({
  //   // 插件选项
  //   components: ['SiteInfo', 'VPCard', 'FontIcon', 'Badge'],
  // }),
  // 自定义容器插件
  // containerPlugin({
  //   type: 'projects',
  //   render: (tokens, idx) => {
  //     return renderProjects(tokens, idx)
  //   }
  // })
]

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
  // 博客插件配置
  blog: {
    hotReload: true, // 启用热更新
    timeline: 'archives', // 时间轴访问路径修改成archives
    // 过滤列表页面
    // filter: ({ filePathRelative, frontmatter }) => {
    //   // 舍弃那些不是从 Markdown 文件生成的页面
    //   if (!filePathRelative) return false
    //   // 舍弃notes文件夹的页面
    //   if (filePathRelative.startsWith('notes/')) return false
    //   // 舍弃nav文件夹的页面
    //   if (filePathRelative.startsWith('nav/')) return false
    //   // 舍弃about文件夹的页面
    //   if (filePathRelative.startsWith('about/')) return false
    //   // 舍弃所有的README.md页面
    //   if (filePathRelative.endsWith('README.md')) return false
    //   // 舍弃那些没有使用默认布局的页面
    //   const excludeLayouts = ['ArticleLayout']
    //   if (
    //     frontmatter.home ||
    //     (frontmatter.layout && !excludeLayouts.includes(frontmatter.layout))
    //   )
    //     return false
    //   return true
    // }
  },
  // 复制代码插件配置
  copyCode: {
    showInMobile: true, // 手机端显示代码复制
  },
  // 版权信息是否显示
  copyright: true,
  // If you don’t need comment feature, you can remove following option
  // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
  // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
  // 评论插件配置
  // comment: {
  //   provider: 'Artalk',
  //   server: 'https://artalk.liubing.me',
  //   versionCheck: false,
  // },
  // Disable features you don’t want here
  // Markdown 增强插件配置
  mdEnhance: {
    align: true,
    // attrs: true,
    // chart: true,
    codetabs: true,
    // container: true,
    // demo: true,
    // echarts: true,
    figure: true,
    // flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    // katex: true,
    // mark: true,
    // mermaid: true,
    // playground: {
    //   presets: ['ts', 'vue']
    // },
    // presentation: {
    //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
    // },
    // stylize: [
    //   {
    //     matcher: 'Recommended',
    //     replacer: ({ tag }) => {
    //       if (tag === 'em')
    //         return {
    //           tag: 'Badge',
    //           attrs: { type: 'tip' },
    //           content: 'Recommended'
    //         }
    //     }
    //   }
    // ],
    sub: true,
    sup: true,
    tabs: true,
    // vPre: true,
    // vuePlayground: true
  },
}
