import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';
import injectSheet from 'react-jss';

import theme from '~/theme.config';
import styles from './styles';

/**
 * Renders a searchable single or multi select box.
 */
const Dropdown = ({
  classes,
  className,
  defaultValue,
  id,
  isDisabled,
  isMulti,
  isSearchable,
  label,
  onChange,
  options,
  placeholder,
  variation
}) => {
  const value = options.filter(object => object.value === defaultValue);
  const customStyles = styles(theme);
  return (
    <div className={classnames(classes.root, classes[variation], className)}>
      {label && <span className={classes.label}>{label}</span>}
      <Select
        styles={customStyles.styles}
        theme={customStyles.theme}
        defaultValue={value}
        instanceId={id}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isSearchable={isSearchable}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

Dropdown.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Value of an option to default to */
  defaultValue: PropTypes.string,
  /** Id to apply to select component */
  id: PropTypes.string.isRequired,
  /** When true the select element is disabled */
  isDisabled: PropTypes.bool,
  /** When true multiple options can be selected */
  isMulti: PropTypes.bool,
  /** When true the select options can be searched */
  isSearchable: PropTypes.bool,
  /** Text to display above select component */
  label: PropTypes.string,
  /** Method to subscribe to on change events */
  onChange: PropTypes.func,
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
  placeholder: PropTypes.string,
  /** Type of select element to render */
  variation: PropTypes.oneOf(['single-select', 'multi-select']).isRequired
};

Dropdown.defaultProps = {
  isSearchable: true
};

export default injectSheet(styles)(Dropdown);
