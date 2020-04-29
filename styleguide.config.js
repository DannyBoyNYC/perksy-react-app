const { styles, theme } = require('./styleguide.styles');

module.exports = {
  title: 'Perksy Components',
  serverPort: 3000,
  template: {
    favicon: '/favicon.ico',
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
  getComponentPathLine(componentPath) {
    if (!componentPath.includes('components/')) {
      return '';
    }
    const path = componentPath.split('/');
    const component = path[2].replace('.js', '');
    const directory = path[1];
    return `import ${component} from '~/components/${directory}';`;
  },
  styles,
  theme,
  sortProps: props => props,
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: './components/**/[A-Z]*.js',
      exampleMode: 'collapse', // view code
      usageMode: 'expand', // prop table
      description:
        'A collection of common patterns used across Perksy web applications. The aim of this library is to provide a toolbelt of components, that will allow the composition of pages more quickly and consistently. [View on Github](https://github.com/perksy/perksy-components).'
    },
    {
      name: 'Pages',
      components: './styleguide/pages/**/[A-Z]*.js',
      exampleMode: 'hide',
      usageMode: 'hide',
      description:
        'A rough grouping of components required for each page in the web application.'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Style Conventions',
          content: './docs/style-conventions.md'
        }
      ]
    }
  ]
};
