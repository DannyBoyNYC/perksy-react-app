// eslint-disable-next-line no-unused-vars
export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '&.wrap': {
      flexWrap: 'wrap',
      '& .column': {
        flex: '0 1 auto'
      }
    }
  },
  even: {
    '& .column': {
      flex: '1'
    },
    '@media (max-width: 1024px)': {
      flexWrap: 'wrap',
      '& .column': {
        flex: '1 1 auto',
        width: '100%'
      }
    }
  },
  'one-span-two': {
    '& .column': {
      flex: '2 2 0'
    },
    '& .column:first-child': {
      flex: '1 1 0'
    },
    '@media (max-width: 1024px)': {
      flexWrap: 'wrap',
      '& .column': {
        flex: '1 1 auto',
        width: '100%'
      }
    }
  },
  'span-two-one': {
    '& .column': {
      flex: '1 1 0'
    },
    '& .column:first-child': {
      flex: '2 2 0'
    },
    '@media (max-width: 1024px)': {
      flexWrap: 'wrap',
      '& .column': {
        flex: '1 1 auto',
        width: '100%'
      }
    }
  },
  'span-three-span-two': {
    '& .column': {
      flex: '2 2 0'
    },
    '& .column:first-child': {
      flex: '3 3 0'
    },
    '@media (max-width: 1024px)': {
      flexWrap: 'wrap',
      '& .column': {
        flex: '1 1 auto',
        width: '100%'
      }
    }
  }
});
