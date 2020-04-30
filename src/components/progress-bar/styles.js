// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    background: theme.colors.white,
    padding: '10px 0',
    position: 'relative'
  },
  bar: {
    background: theme.colors.lightest,
    borderRadius: '5px',
    height: '8px',
    margin: '10px 0',
    position: 'relative',
    width: '100%'
  },
  filler: {
    background: theme.colors.primary,
    borderRadius: '5px',
    height: '100%',
    transition: 'width 0.2s ease-in'
  },
  percentageValue: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.large,
    position: 'absolute',
    right: '0',
    top: '10px'
  },
  label: {},
  title: {
    fontFamily: theme.fontFamilyMed,
    padding: '10px 0'
  }
});
