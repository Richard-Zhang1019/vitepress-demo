import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'lucky-design',
  description: 'Just playing around',
  lang: 'zh-CN',
  appearance: 'dark',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }],
  ],
  themeConfig: {
    logo: '/icon.png',
    // 网站header部分标题
    siteTitle: 'lucky-design',
    // 顶部tab-bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
    ],
    // slider-bar
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          { text: 'about', link: '/about' },
          { text: 'profile', link: '/profile' },
        ],
      },
      {
        text: 'Components',
        collapsible: true,
        items: [
          { text: 'button', link: '/button' },
          { text: 'icon', link: '/icon' },
        ],
      },
    ],
    outlineTitle: 'In hac page',
    // 社交账号链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ByteDanceYouthTrainCamp/lucky-design',
      },
    ],
    // footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Lucky-Design',
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    algolia: {
      appId: 'Z7DZ7S5F34',
      apiKey: 'f2fc637edfcc09751dcea9a8e26350f4',
      indexName: 'Lucky-design',
    },
  },
  lastUpdated: true,
  markdown: {
    theme: 'material-darker',
    lineNumbers: true,
  },
})
