// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    background: theme.colors.lightest
  },
  content: {
    background: theme.colors.white,
    padding: '0 10px'
  },
  tabItem: {
    background: theme.colors.lightest,
    borderBottom: `1px solid ${theme.colors.base}`,
    color: theme.colors.base,
    cursor: 'pointer',
    fontSize: theme.fontSize.base,
    margin: '0 10px',
    '&:hover': {
      color: theme.colors.dark,
      textShadow: '0.5px 0px 0px'
    },
    '&.active': {
      borderBottom: `3px solid ${theme.colors.primary}`,
      color: theme.colors.primary,
      textShadow: '0.5px 0px 0px'
    },
    '&.disabled': {
      borderBottom: `1px solid ${theme.colors.light}`,
      color: theme.colors.base,
      cursor: 'default',
      '&:hover': {
        textShadow: 'none'
      }
    }
  },
  tabList: {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: '30px',
    '& li': {
      display: 'inline-block',
      padding: '20px 30px'
    }
  },
  horizontal: {
    '& $tabList': {
      flexDirection: 'row'
    }
  }
});
