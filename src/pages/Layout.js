import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Sidebar from '~/components/sidebar';

import data from '~/data';

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: 'Larsseit',
      fontWeight: '400',
      src: 'url(/static/fonts/Larsseit_Regular.ttf)'
    },
    {
      fontFamily: 'Larsseit_Medium',
      fontWeight: '500',
      src: 'url(/static/fonts/Larsseit_Medium.ttf)'
    },
    {
      fontFamily: 'Larsseit_Bold',
      fontWeight: '700',
      src: 'url(/static/fonts/Larsseit_Bold.ttf)'
    }
  ],
  root: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: theme.fontFamily
  },
  sidebar: {
    '& nav li': {
      padding: 0
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '240px',
    minHeight: '1000px',
    width: '100%'
  }
});

/**
 * The layout that all pages should extend.
 */
const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <Sidebar.Static
      className={classes.sidebar}
      links={data.links}
      user={data.user}
      ultilityLinks={data.ultilityLinks}
    />
    <main className={classes.main}>{children}</main>
  </div>
);

Layout.propTypes = {
  /** Page content to render inside of the layout */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Layout);
