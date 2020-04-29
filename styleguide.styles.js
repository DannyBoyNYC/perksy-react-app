const colors = {
  black: '#000000',
  off_black: '#191717',
  white: '#ffffff',
  off_white: '#F7F6F5',
  dark_grey: '#5F5E66',
  dark_mushroom: '#B5ACAA',
  light_mushroom: '#EFEBE8',
  tan: '#EDDDC9',
  sky: '#CCE2EA',
  pink: '#F9CCCC',
  thistle: '#E8D8EA',
  lemon: '#F4EF60',
  moss: '#6B9956',
  vermillion: '#F96B59',
  navy: '#3F5B96'
};

const theme = {
  color: {
    base: colors.off_black, // text color
    light: colors.dark_mushroom, // page accents
    link: colors.moss,
    linkHover: colors.vermillion,
    border: colors.light_mushroom,
    name: colors.navy, // prop table
    type: colors.off_black, // prop table
    error: colors.vermillion,
    baseBackground: colors.white,
    codeBackground: colors.off_white,
    sidebarBackground: colors.light_mushroom,
    ribbonBackground: colors.moss,
    ribbonText: colors.light_mushroom
  },
  fontSize: {
    base: 15,
    text: 16,
    small: 13,
    h1: 38,
    h2: 32,
    h3: 18,
    h4: 18,
    h5: 16,
    h6: 16
  },
  maxWidth: 900,
  sidebarWidth: 240
};

const styles = {
  ComponentsList: {
    heading: {
      fontWeight: '700 !important' // bold sidebar sections
    }
  },
  Code: {
    code: {
      color: colors.navy
    }
  },
  Editor: {
    root: {
      '& .CodeMirror': {
        background: `${colors.off_white} !important`
      }
    }
  },
  Heading: {
    heading1: {
      display: 'block',
      position: 'relative',
      paddingBottom: '1.125rem',
      marginBottom: '1.125rem',
      fontWeight: 700,
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '4rem',
        height: '4px',
        backgroundColor: colors.light_mushroom
      },
      '& > a': {
        fontWeight: '700 !important'
      }
    },
    heading2: {
      marginBottom: '0.75rem'
    },
    heading3: {
      borderBottom: `2px solid ${colors.light_mushroom}`,
      paddingBottom: '0.375rem',
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      fontWeight: '700'
    }
  },
  Playground: {
    preview: {
      background: colors.off_white,
      border: 0,
      borderRadius: 0
    }
  },
  ReactComponent: {
    // Prop Table
    header: {
      '& h2 a': {
        color: `${colors.moss} !important`
      }
    },
    tabs: {
      backgroundColor: colors.off_white,
      padding: '0.75rem 1.5rem',
      overflow: 'auto'
    },
    tabBody: {
      '& table': {
        marginTop: '20px'
      },
      // type values
      '& span[class*="rsg--type"] code': {
        color: colors.dark_mushroom
      },
      // required values
      '& span[class*="rsg--lightColor"]': {
        color: colors.moss
      }
    },
    tabButtons: {
      marginBottom: 0
    }
  },
  SectionHeading: {
    sectionName: {
      display: 'block',
      paddingTop: '1rem !important',
      textDecoration: 'none !important',
      '&:hover': {
        opacity: 0.75
      }
    }
  },
  StyleGuide: {
    content: {
      paddingTop: '3.75rem',
      '@media (max-width: 600px)': {
        padding: '1.5rem'
      }
    },
    logo: {
      border: 0,
      background: 'url("/logo_off-black.svg") no-repeat',
      display: 'block',
      width: '100%',
      height: '65px',
      marginTop: '10px',
      '& h1': {
        textIndent: '-9999px'
      }
    },
    sidebar: {
      border: 0,
      '& li > a': {
        color: `${colors.off_black} !important`
      },
      '& li > a:hover': {
        cursor: 'pointer',
        color: `${colors.moss} !important`
      }
    }
  },
  TabButton: {
    button: {
      color: colors.dark_grey,
      width: '100%'
    },
    isActive: {
      border: 0
    }
  }
};

module.exports = {
  styles,
  theme
};
