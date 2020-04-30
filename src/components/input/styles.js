// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    display: 'block',
    marginBottom: '40px',
    '&.required label > span:after': {
      content: '"*"'
    }
  },
  input: {
    background: theme.colors.lightest,
    border: `2px solid ${theme.colors.light}`,
    borderRadius: '3px',
    fontSize: theme.fontSize.base,
    height: '33px',
    outline: 'none',
    padding: '0 10px',
    position: 'relative',
    transitionDuration: '200ms',
    '&:hover': {
      border: `2px solid ${theme.colors.base}`
    },
    '&:focus': {
      border: `2px solid ${theme.colors.primary}`
    },
    '&:disabled': {
      background: theme.colors.white,
      border: `2px solid ${theme.colors.lightest}`,
      color: theme.colors.base
    },
    '&::placeholder': {
      color: theme.colors.base
    }
  },
  label: {
    color: theme.colors.black,
    display: 'block',
    padding: '10px 0'
  },
  checkbox: {
    '& $input': {
      appearance: 'none',
      background: theme.colors.white,
      borderColor: theme.colors.base,
      height: '30px',
      outline: 'none',
      position: 'relative',
      transitionDuration: '200ms',
      width: '30px',
      '&:hover': {
        cursor: 'pointer',
        background: theme.colors.base
      },
      '&:checked': {
        background: theme.colors.primary,
        borderColor: theme.colors.primary,
        '&:after': {
          display: 'block'
        },
        '&:disabled': {
          background: theme.colors.light
        }
      },
      '&:disabled': {
        borderColor: theme.colors.light,
        cursor: 'auto',
        '&:hover': {
          background: theme.colors.white
        }
      },
      '&:after': {
        border: `solid ${theme.colors.white}`,
        borderWidth: '0 3px 3px 0',
        content: '""',
        display: 'none',
        height: '10px',
        left: '9px',
        position: 'absolute',
        top: '5px',
        transform: 'rotate(45deg)',
        width: '5px'
      }
    },
    '& $label': {
      display: 'inline-block',
      padding: '12px 5px',
      verticalAlign: 'top'
    }
  },
  email: {
    '& $input': {
      width: '300px'
    }
  },
  file: {
    '& $input': {
      padding: '10px 10px 0',
      width: '300px'
    }
  },
  hidden: {
    '& $label': {
      display: 'none'
    }
  },
  number: {
    '& $input': {
      width: '50px'
    }
  },
  password: {
    '& $input': {
      width: '300px'
    }
  },
  radio: {
    '& $input': {
      appearance: 'none',
      background: theme.colors.white,
      borderColor: theme.colors.base,
      borderRadius: '50%',
      height: '30px',
      outline: 'none',
      position: 'relative',
      transitionDuration: '200ms',
      width: '30px',
      '&:hover': {
        cursor: 'pointer',
        '&:after': {
          background: theme.colors.base
        }
      },
      '&:checked': {
        background: theme.colors.white,
        borderColor: theme.colors.primary,
        '&:after': {
          background: theme.colors.primary
        },
        '&:hover:after': {
          background: theme.colors.primary
        },
        '&:disabled:after': {
          background: theme.colors.light
        }
      },
      '&:disabled': {
        borderColor: theme.colors.light,
        cursor: 'auto',
        '&:hover:after': {
          background: theme.colors.white
        }
      },
      '&:after': {
        background: theme.colors.white,
        borderRadius: '50%',
        content: '""',
        height: '18px',
        left: '4px',
        position: 'absolute',
        top: '4px',
        width: '18px',
        zIndex: '1'
      }
    },
    '& $label': {
      display: 'inline-block',
      padding: '12px 5px',
      verticalAlign: 'top'
    }
  },
  switch: {
    '& $input': {
      appearance: 'none',
      background: theme.colors.white,
      borderColor: theme.colors.base,
      borderRadius: '50px',
      boxShadow: `inset -20px 0 0 0 ${theme.colors.base}`,
      height: '30px',
      outline: 'none',
      position: 'relative',
      transitionDuration: '200ms',
      width: '50px',
      '&:focus': {
        border: `2px solid ${theme.colors.base}`
      },
      '&:hover': {
        cursor: 'pointer'
      },
      '&:checked': {
        borderColor: theme.colors.primary,
        boxShadow: `inset 20px 0 0 0 ${theme.colors.primary}`,
        '&:after': {
          boxShadow: '-1px 3px 3px rgba(0,0,0,0.15)',
          left: '20px'
        },
        '&:disabled': {
          borderColor: theme.colors.light,
          boxShadow: `inset 20px 0 0 0 ${theme.colors.light}`
        }
      },
      '&:disabled': {
        borderColor: theme.colors.light,
        boxShadow: `inset -20px 0 0 0 ${theme.colors.light}`,
        cursor: 'auto'
      },
      '&:after': {
        background: 'transparent',
        borderRadius: '50%',
        boxShadow: '1px 3px 4px rgba(0,0,0,0.10)',
        content: '""',
        height: '26px',
        left: '1px',
        position: 'absolute',
        top: '1px',
        width: '26px'
      }
    },
    '& $label': {
      display: 'inline-block',
      padding: '12px 5px',
      verticalAlign: 'top'
    }
  },
  tel: {
    '& $input': {
      width: '300px'
    }
  },
  text: {
    '& $input': {
      width: '300px'
    }
  },
  textarea: {
    '& textarea': {
      height: '80px',
      padding: '10px',
      width: '300px'
    }
  }
});
