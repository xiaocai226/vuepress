module.exports = {
  base: '/vuepress/',
  lang: 'zh-CH',
  title: '使用手册！',// 标题
  description: '只是我的第一个vuepress站点',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '小菜花' }],
    ['meta', { name: 'keywords', content: 'vuepress介绍 vuepress说明' }]
  ],
  // 导航栏
  themeConfig: {// 导航栏logo
    lastUpdated: '更新时间',
    // navbar: false, // 禁用导航栏
    logo: '/assets/img/logo.png',
    nav: [// 导航栏链接
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'External', link: 'https://google.com' },
      // {// 导航下拉框
      //   text: 'Languages',
      //   items: [
      //     {
      //       text: 'Group1',
      //       items: [
      //         { text: 'About', link: '/about' },
      //         { text: 'About', link: '/about' },
      //       ]
      //     },{
      //       text: 'Group2',
      //       items: [
      //         { text: 'About', link: '/about' },
      //         { text: 'About', link: '/about' },
      //       ]
      //     }
      //   ]
      // },
    ],
    sidebar: 'auto',// 自动生成侧边栏
    // 侧边栏
    // sidebar: [// 数组
    //   '',
    //   'about',
    //   'about1',
    //   {// 侧边栏分组
    //     title: '美丽的CSS',   // 必要的
    //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true, false表示让一个组永远都是展开状态
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/css/c-aaa',
    //       '/css/c-bbb',
    //       '/css/c-ccc',
    //     ]
    //   },
    // ],
    // 多个侧边栏
    // sidebar: {
    //   "/css/": [
    //     'c-aaa',
    //     'c-bbb',
    //     'c-ccc',
    //   ],
    //   "/java/": [
    //     'j-aaa',
    //     'j-bbb',
    //     'j-ccc',
    //   ]
    // }
  }
}
