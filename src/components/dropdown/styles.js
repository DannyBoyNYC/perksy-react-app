// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    width: '325px'
  },
  label: {
    color: theme.colors.black,
    display: 'block',
    padding: '10px 0'
  },
  styles: {
    control: styles => ({
      ...styles,
      backgroundColor: theme.colors.lightest,
      border: `2px solid ${theme.colors.light}`,
      boxShadow: '0',
      '&:hover': {
        border: `2px solid ${theme.colors.base}`
      },
      height: '30px'
    }),
    placeholder: styles => ({
      ...styles,
      color: theme.colors.base,
      top: '55%'
    })
  },
  theme: vendorTheme => ({
    ...vendorTheme,
    borderRadius: 3,
    colors: {
      ...vendorTheme.colors,
      primary: theme.colors.primary,
      primary75: '#4C9AFF',
      primary50: '#B2D4FF',
      primary25: '#DEEBFF',
      danger: '#DE350B',
      dangerLight: '#FFBDAD'
    }
  })
});
