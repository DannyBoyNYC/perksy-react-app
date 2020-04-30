// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    appearance: 'none',
    border: '0',
    borderRadius: '3px',
    cursor: 'pointer',
    margin: '0 0.5em',
    padding: '1em 1.2em',
    transitionDuration: '200ms',
    transitionProperty: 'color, background',
    transitionTimingFunction: 'ease-in',
    '&:disabled': {
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.lightest}`,
      color: theme.colors.black,
      cursor: 'auto',
      '&:hover': {
        background: theme.colors.white
      }
    }
  },
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    '&:hover': {
      background: theme.colors.primaryDark
    }
  },
  info: {
    backgroundColor: theme.colors.white
  },
  success: {
    backgroundColor: theme.colors.valid
  },
  warning: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white
  },
  danger: {
    backgroundColor: theme.colors.invalid
  }
});
