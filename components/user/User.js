import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a User.
 */
const User = ({ brandName, className, firstName, lastName, variation }) => (
  <div className={classnames('user', `user--${variation}`, className)}>
    <div className="user__image" />
    <div className="user__name">
      <span className="user__first-name">{firstName}</span>
      <span className="user__last-name">{lastName}</span>
    </div>
    <div className="user__brand">{brandName}</div>
  </div>
);

User.propTypes = {
  /** Brand that a use is associated with */
  brandName: PropTypes.string.isRequired,
  /** Top level class name to add to component */
  className: PropTypes.string,
  /** User's first name */
  firstName: PropTypes.string.isRequired,
  /** User's last name */
  lastName: PropTypes.string.isRequired,
  /** Type of user to render */
  variation: PropTypes.oneOf(['avatar']).isRequired
};

export default User;
