module.exports = {
  title: 'Magica',
  description: 'Design System da Conta Azul',
  dest: 'pages',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: 'auto',
    sidebar: [
      ['/', 'Home'],
      ['about.md', 'Sobre']
    ],
    // sidebar: [
    //   {
    //     title: 'Boas-vindas',
    //     link: '/'
    //   },
    //   {
    //     title: 'Sobre',
    //     link: '/about.md'
    //   },
    //   {
    //     title: 'Estilos',
    //     collapsable: true,
    //     children: [
    //       '/styles/colors.md'
    //     ]
    //   },
    //   {
    //     title: 'Componentes',
    //     collapsable: true,
    //     children: [
    //       '/components/radio-button.md',
    //       '/components/select.md'
    //     ]
    //   }
    // ],

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
    repo: 'harry-porto/VuePress-NetlifyCMS',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

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
