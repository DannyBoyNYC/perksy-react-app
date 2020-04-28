import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * A basic button with an on click event.
 */
const Button = ({ children, isDisabled, onClick, variation }) => (
  <button
    className={classnames('button', `button--${variation}`, {
      'button--disabled': isDisabled
    })}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
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

export default Button;
