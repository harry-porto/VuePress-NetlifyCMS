module.exports = {
  title: 'Magica',
  description: 'Design System da Conta Azul',
  dest: 'pages',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    // sidebar: 'auto',
    sidebar: [
      [ '/', 'Boas-vindas' ],
      [ '/about.md', 'Sobre' ],
      {
        title: 'Estilos',
        collapsable: true,
        children: [
          ['/styles/colors', 'Cores'],
        ]
      },
      {
        title: 'Componentes',
        collapsable: true,
        children: [
          ['/components/radio', 'Radio'],
          ['/components/select', 'Select'],
        ]
      }
    ],

    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: true, // 默认值：true
    lastUpdated: 'Última atualização', // string | boolean

    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'harry-porto/VuePress-NetlifyCMS',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: 'Github',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'DemoMacro/VueCMS',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: 'Editar'
  }
}
