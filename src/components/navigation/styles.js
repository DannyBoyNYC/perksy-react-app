// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {},
  list: {
    display: 'flex',
    listStyle: 'none',
    paddingLeft: '0',
    '& li': {
      display: 'inline-block',
      padding: '10px'
    }
  },
  horizontal: {
    '& $list': {
      flexDirection: 'row'
    }
  },
  vertical: {
    '& $list': {
      flexDirection: 'column'
    }
  }
});
