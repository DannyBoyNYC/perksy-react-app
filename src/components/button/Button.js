const React = require('react');
const PropTypes = require('prop-types');

/**
 * A button
 */
const Button = ({ children, isDisabled, onClick, type }) => (
  <button
    className={('button', `button--${type}`)}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Disable button */
  isDisabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
  /** Foo */
  type: PropTypes.string
};

module.exports = Button;
