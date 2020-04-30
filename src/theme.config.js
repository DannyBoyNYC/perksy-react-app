const colors = {
  black: '#000000',
  offBlack: '#191717',
  white: '#FFFFFF',
  offWhite: '#F7F6F5',
  darkGrey: '#5F5E66',
  lightGrey: '#DEDDDC',
  mediumGrey: '#BDBDBD',
  tan: '#EDDDC9',
  blue: '#4797F4',
  navy: '#19222F',
  seaform: '#58C087'
};

module.exports = {
  colors: {
    base: colors.mediumGrey,
    primary: colors.blue,
    primaryDark: '#2E7EDB',
    primaryLight: '#61B1FF',
    secondary: colors.navy,
    invalid: 'red',
    valid: colors.seaform,
    white: colors.white,
    lightest: colors.offWhite,
    light: colors.lightGrey,
    dark: colors.darkGrey,
    black: colors.black
  },
  background: {
    page: colors.white,
    sidebar: colors.navy,
    main: colors.white,
    block: colors.offWhite,
    item: colors.offWhite
  },
  fontFamily: 'Larsseit, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilyMed:
    'Larsseit_Medium, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilyBold:
    'Larsseit_Bold, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: {
    base: '15px',
    text: '16px',
    small: '13px',
    large: '20px',
    h1: '28px',
    h2: '22px',
    h3: '20px',
    h4: '18px',
    h5: '18px',
    h6: '16px'
  }
};
