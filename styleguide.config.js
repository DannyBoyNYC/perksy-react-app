module.exports = {
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
  sortProps: props => props,
  pagePerSection: true,
  sections: [
    {
      name: 'UI Components',
      components: './src/components/**/[A-Z]*.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'App Pages',
      components: './src/pages/**/[A-Z]*.js'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Style Conventions',
          content: './docs/style-conventions.md',
          description: 'The description for the installation section'
        },
        {
          name: 'Staging Site',
          external: true,
          href: 'https://staging.getperksy.com'
        }
      ]
    }
  ]
};
