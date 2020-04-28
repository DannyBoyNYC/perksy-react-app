import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a single or mutiple select box
 */
class Dropdown extends React.Component {
  render() {
    const {
      defaultValue,
      isDisabled,
      isMulti,
      label,
      options,
      variation
    } = this.props;

    return (
      <div
        className={classnames('dropdown', `dropdown--${variation}`, {
          'dropdown--disabled': isDisabled
        })}
      >
        <label>
          {label}
          <select disabled={isDisabled} multiple={isMulti}>
            {options.map(({ imageUrl, label, value }) => (
              <option
                value={value}
                key={value}
                dangerouslySetInnerHTML={{ __html: label }}
              />
            ))}
          </select>
        </label>
      </div>
    );
  }
}

Dropdown.propTypes = {
  /** When true the select element is disabled */
  isDisabled: PropTypes.bool,
  /** When true multiple options can be selected */
  isMulti: PropTypes.bool,
  /** Content for select label */
  label: PropTypes.string.isRequired,
  /** List of option objects to render */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Text or element to show in list */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      /** Value to set and select */
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Type of select element to render */
  variation: PropTypes.oneOf(['single-select', 'multi-select']).isRequired
};

export default Dropdown;
