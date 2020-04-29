const { styles, theme } = require('./styleguide.styles');

module.exports = {
  title: 'Perksy Components',
  serverPort: 3000,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
        }
      ]
    }
  },
  assetsDir: './styleguide/assets',
  styles,
  theme,
  sortProps: props => props,
  pagePerSection: true,
  sections: [
    {
      name: '',
      content: './components/README.md'
    },
    {
      name: 'Components',
      components: './components/**/[A-Z]*.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Pages',
      components: './styleguide/pages/**/[A-Z]*.js'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Style Conventions',
          content: './docs/style-conventions.md',
          description: 'The description for the installation section'
        }
      ]
    }
  ]
};
