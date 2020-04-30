// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    background: theme.background.sidebar,
    marginLeft: '0',
    position: 'relative',
    textAlign: 'center',
    transition: 'margin-left 0.5s ease',
    '&.collapsed': {
      minWidth: '80px',
      maxWidth: '80px',
      marginLeft: '-20px'
    }
  },
  toggle: {
    margin: '0',
    position: 'absolute',
    right: '0'
  },
  logo: {
    marginTop: '20px'
  },
  user: {
    color: 'white',
    margin: '35px auto 45px',
    textAlign: 'center',
    '& img': {
      margin: '0 auto'
    }
  },
  navigation: {
    textAlign: 'left',
    '& a': {
      color: theme.colors.white,
      padding: '18px 64px 16px',
      transitionDuration: '200ms',
      transitionProperty: 'background',
      transitionTimingFunction: 'ease-in'
    },
    '& a.active, a:active': {
      background: theme.colors.primary
    },
    '& a:hover': {
      background: theme.colors.primaryDark
    }
  },
  utility: {
    bottom: '0',
    position: 'absolute',
    width: '100%'
  },
  static: {
    minHeight: '100%',
    position: 'fixed',
    width: '240px'
  }
});
