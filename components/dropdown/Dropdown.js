import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';

/**
 * Renders a searchable single or multi select box.
 */
const Dropdown = ({
  className,
  defaultValue,
  isDisabled,
  isMulti,
  isSearchable,
  options,
  placeholderText,
  variation
}) => {
  const value = options.filter(object => object.value === defaultValue);
  return (
    <div
      className={classnames('dropdown', `dropdown--${variation}`, className)}
    >
      <Select
        className="dropdown__select"
        classNamePrefix="dropdown"
        defaultValue={value}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isSearchable={isSearchable}
        options={options}
        placeholder={placeholderText}
      />
    </div>
  );
};

Dropdown.propTypes = {
  /** Top level class name to add to component */
  className: PropTypes.string,
  /** Value of an option to default to */
  defaultValue: PropTypes.string,
  /** When true the select element is disabled */
  isDisabled: PropTypes.bool,
  /** When true multiple options can be selected */
  isMulti: PropTypes.bool,
  /** When true the select options can be searched */
  isSearchable: PropTypes.bool,
  /** List of option objects to render */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** When true this option is disabled */
      isDisabled: PropTypes.bool,
      /** Text to show in list */
      label: PropTypes.string.isRequired,
      /** Value to set and select */
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Content for show as placeholder text */
  placeholderText: PropTypes.string,
  /** Type of select element to render */
  variation: PropTypes.oneOf(['single-select', 'multi-select']).isRequired
};

Dropdown.defaultProps = {
  isSearchable: true
};

export default Dropdown;
