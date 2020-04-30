import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import NextLink from 'next/link';
import { withRouter } from 'next/router';

import styles from './styles';

/**
 * Renders a Link.
 */
const Link = ({ children, classes, href, router, variation }) => {
  const child = React.Children.only(children);
  const isActive = router && router.pathname === href;
  const className = classnames(classes.root, classes[variation], {
    active: isActive
  });

  return (
    <NextLink href={href}>{React.cloneElement(child, { className })}</NextLink>
  );
};

Link.propTypes = {
  /** Link content to render */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Path to route to */
  href: PropTypes.string.isRequired,
  /** Next.js router object */
  router: PropTypes.object.isRequired,
  /** Type of Link to render */
  variation: PropTypes.oneOf(['next']).isRequired
};

export default injectSheet(styles)(withRouter(Link));
