// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    '&:empty': {
      paddingLeft: '0',
      '&:after': {
        content: '"None"'
      }
    }
  },
  item: {}
});
