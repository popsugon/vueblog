module.exports = {
  base: '/vueblog/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        // editLinkText: 'Edit this page on GitHub',
        // lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/week-task/': getWeekTaskBar()
          // '/api/': getApiSidebar(),
          // '/guide/': getGuideSidebar('Guide', 'Advanced'),
          // '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
          // '/theme/': getThemeSidebar('Theme', 'Introduction')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        // lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/week-task/': getWeekTaskBar()
          // '/zh/api/': getApiSidebar(),
          // '/zh/guide/': getGuideSidebar('指南', '深入'),
          // '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
          // '/zh/theme/': getThemeSidebar('主题', '介绍')
        }
      }
    }
  }
}

function getWeekTaskBar() {
  return [
    ''
  ]
}
