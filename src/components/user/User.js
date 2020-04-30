import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a User.
 */
const User = ({
  brandName,
  classes,
  className,
  firstName,
  lastName,
  variation
}) => (
  <div className={classnames(classes.root, classes[variation], className)}>
    <img className={classes.image} alt="" />
    <div className={classes.name}>{`${firstName} ${lastName}`}</div>
    <div className={classes.brandName}>{brandName}</div>
  </div>
);

User.propTypes = {
  /** Brand that a use is associated with */
  brandName: PropTypes.string.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** User's first name */
  firstName: PropTypes.string.isRequired,
  /** User's last name */
  lastName: PropTypes.string.isRequired,
  /** Type of user to render */
  variation: PropTypes.oneOf(['avatar']).isRequired
};

export default injectSheet(styles)(User);
