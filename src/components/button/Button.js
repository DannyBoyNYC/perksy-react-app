import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a basic button with an on click event.
 */
const Button = ({
  children,
  classes,
  className,
  isDisabled,
  onClick,
  variation
}) => (
  <button
    className={classnames(classes.root, classes[variation], className)}
    onClick={onClick}
    disabled={isDisabled}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** When true the button is disabled */
  isDisabled: PropTypes.bool,
  /** Method called when the user clicks the button */
  onClick: PropTypes.func,
  /** Type of button to render */
  variation: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ]).isRequired
};

export default injectSheet(styles)(Button);
