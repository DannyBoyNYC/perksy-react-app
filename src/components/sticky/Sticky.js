import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a sticky box around content.
 */
const Sticky = ({ children, classes, className, variation }) => (
  <div className={classnames(classes.root, classes[variation], className)}>
    {children}
  </div>
);

Sticky.propTypes = {
  /** Content to render inside sticky box */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Type of sticky box to render */
  variation: PropTypes.oneOf(['bottom', 'top']).isRequired
};

export default injectSheet(styles)(Sticky);
