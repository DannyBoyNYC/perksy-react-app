const React = require('react');
const PropTypes = require('prop-types');

const variations = ['default', 'primary', 'info', 'success', 'warning', 'danger'];

/**
 * A basic button with an onClick event
 */
const Button = ({ children, isDisabled, onClick, type }) => (
  <button
    className={`button button--${type}`}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Disable button */
  isDisabled: PropTypes.bool,
  /** Called when the user clicks the button */
  onClick: PropTypes.func,
  /** Type of button */
  type: PropTypes.oneOf(variations)
};

Button.defaultProps = {
  type: 'default'
};

// function exportVariations () {
//   variations.forEach((variation) => {
//     const Button.Primary = (props) => <Button type={variation} {...props} />;
//     module.exports.Button.Primary = Button.Primary;
//   });
// }

const Button.Primary = (props) => <Button type="primary" {...props} />;
// const Button.Info = (props) => <Button type="info" {...props} />;
// const Button.Success = (props) => <Button type="success" {...props} />;
// const Button.Warning = (props) => <Button type="warning" {...props} />;
// const Button.Danger = (props) => <Button type="danger" {...props} />;

module.exports = Button;
module.exports.Button.Primary = Button.Primary;
