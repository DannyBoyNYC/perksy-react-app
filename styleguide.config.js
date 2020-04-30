const path = require('path');
const { styles, theme } = require('./styleguide.styles');

module.exports = {
  title: 'Perksy Components',
  serverPort: 6060,
  template: {
    favicon: '/favicon.ico'
  },
  assetsDir: path.join(__dirname, 'src/static'),
  styleguideDir: '.styleguide',
  styles,
  theme,
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    if (!componentPath.includes('components/')) {
      return '';
    }
    const parts = componentPath.split('/');
    const component = parts[3].replace('.js', '');
    const directory = parts[2];
    return `import ${component} from '~/components/${directory}';`;
  },
  sortProps: props => props,
  sections: [
    {
      name: 'Components',
      components: './src/components/**/[A-Z]*.js',
      exampleMode: 'collapse', // view code
      usageMode: 'expand', // prop table
      description:
        'A collection of common patterns used across Perksy web applications. The aim of this library is to provide a toolbelt of components, that will allow the composition of pages more quickly and consistently. [View on Github](https://github.com/perksy/perksy-components).'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide.wrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};
