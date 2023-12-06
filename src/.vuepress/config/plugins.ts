import { PluginConfig } from 'vuepress'
import { PluginsOptions } from 'vuepress-theme-hope'
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

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
]

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
  // 博客插件配置
  blog: {
    hotReload: true, // 启用热更新
    timeline: 'archives', // 时间轴访问路径修改成archives
  },
  // 复制代码插件配置
  copyCode: {
    showInMobile: true, // 手机端显示代码复制
  },
  // 版权信息是否显示
  copyright: true,
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
