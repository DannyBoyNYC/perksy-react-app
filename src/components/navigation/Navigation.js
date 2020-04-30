import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import Link from '~/components/link';
import List from '~/components/list';
import styles from './styles';

/**
 * Renders a list of links within a navigation element.
 */
const Navigation = ({ classes, className, links, variation }) => (
  <nav className={classnames(classes.root, classes[variation], className)}>
    <List.Unordered
      className={classes.list}
      items={links}
      onPrerender={({ text, url }) => (
        <Link.Next href={url}>
          <a>{text}</a>
        </Link.Next>
      )}
    />
  </nav>
);

Navigation.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** List of link objects */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** Link text to display */
      text: PropTypes.string.isRequired,
      /** Link url for href attribute */
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Type of navigation to render */
  variation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired
};

export default injectSheet(styles)(Navigation);
