// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    background: theme.colors.white,
    fontSize: theme.fontSize.base
  },
  heading: {
    fontSize: theme.fontSize.text,
    fontFamily: theme.fontFamilyBold,
    margin: '0',
    padding: '10px 0'
  },
  empty: {
    padding: '20px'
  },
  item: {
    color: theme.colors.dark
  },
  'campaign-percentage': {
    '& $heading': {
      color: theme.colors.primary
    }
  },
  'campaign-row': {
    margin: '50px 20px',
    '& $heading': {
      background: theme.colors.primary,
      borderRadius: '10px 10px 0 0',
      color: theme.colors.white,
      padding: '20px'
    },
    '& $item': {
      padding: '15px 20px'
    }
  }
});
