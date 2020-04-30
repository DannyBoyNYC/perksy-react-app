// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    background: theme.colors.white,
    position: 'relative'
  },
  children: {},
  image: {},
  name: {
    color: theme.colors.black,
    fontFamily: theme.fontFamilyMed,
    padding: '10px 0 0'
  },
  spacer: {
    flex: '1'
  },
  card: {
    borderRadius: '5px',
    fontSize: theme.fontSize.text,
    display: 'inline-block'
  },
  percentage: {
    fontSize: theme.fontSize.small
  },
  progress: {},
  row: {
    borderBottom: `1px solid ${theme.colors.lightest}`,
    display: 'flex',
    flexDirection: 'row',
    padding: '10px',
    '& $children': {
      alignSelf: 'center',
      padding: '0 20px'
    },
    '& $image': {
      alignSelf: 'center'
    },
    '& $name': {
      alignSelf: 'center',
      padding: '0 20px'
    }
  }
});
