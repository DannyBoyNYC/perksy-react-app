import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a Logo.
 */
const Logo = ({ classes, className, path, variation }) => (
  <div className={classnames(classes.root, classes[variation], className)}>
    <img
      className={classes.image}
      src={path || `/static/logo_${variation}.svg`}
      alt={`Perksy ${variation} logo`}
    />
  </div>
);

Logo.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Image path of logo */
  path: PropTypes.string,
  /** Type of Logo to render */
  variation: PropTypes.oneOf(['black', 'white']).isRequired
};

export default injectSheet(styles)(Logo);
