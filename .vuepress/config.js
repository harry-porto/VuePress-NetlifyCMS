module.exports = {
  title: 'Magica',
  description: 'Design System da Conta Azul',
  dest: 'pages',
  head: [
    // ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/pt/': {
      lang: 'pt-BR', // this will be set as the lang attribute on <html>
      title: 'Magica',
      description: 'Design System da Conta Azul'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Magica',
      description: 'Conta Azul Design System'
    }
  },
  themeConfig: {
    // sidebar: 'auto',
    locales: {
      '/pt/': {
        // text for the language dropdown
        selectText: 'Línguas',
        // label for this locale in the language dropdown
        label: 'Português',
        // text for the edit-on-github link
        editLinkText: 'Editar',
        // config for Service Worker 
        serviceWorker: {
          updatePopup: {
            message: "Novo conteúdo disponível.",
            buttonText: "Atualizar"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        sidebar: [
          [ '/pt/', 'Boas-vindas' ],
          [ '/pt/sobre.md', 'Sobre' ],
          {
            title: 'Estilos',
            collapsable: true,
            children: [
              ['/pt/estilos/cores', 'Cores'],
            ]
          },
          {
            title: 'Componentes',
            collapsable: true,
            children: [
              ['/pt/componentes/badge', 'Badge'],
              ['/pt/componentes/radio', 'Radio'],
              ['/pt/componentes/select', 'Select'],          
            ]
          }
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit',
        serviceWorker: {
          updatePopup: {
            message: "New content available",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        sidebar: [
          [ '/en/', 'Welcome' ],
          [ '/en/about.md', 'About' ],
          {
            title: 'Styles',
            collapsable: true,
            children: [
              ['/en/styles/colors', 'Colors'],
            ]
          },
          {
            title: 'Components',
            collapsable: true,
            children: [
              ['/en/components/badge', 'Badge'],
              ['/en/components/radio', 'Radio'],
              ['/en/components/select', 'Select'],          
            ]
          }
        ],
      }
    },
    plugins: {
      redirect: {
        locales: true,
        redirectors: [
          // customize your redirectors
          {
            base: '/', // automatically redirect `/my-plugins/` to a subpage
            storage: true, // save the result of the last visit to `localStorage` for the next redirect
            alternative: [
              // provide an alternate list
              // if no page was matched, you will get a "404 not found"
              'en',
              'pt',
            ]
          },
        ],
      },
    },
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: true, // 默认值：true

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
