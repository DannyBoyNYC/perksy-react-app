import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a Input.
 */
const Input = ({
  classes,
  className,
  id,
  isChecked,
  isDisabled,
  isRequired,
  label,
  variation,
  ...props
}) => {
  const InputTag = variation === 'textarea' ? 'textarea' : 'input';
  const inputType = variation === 'switch' ? 'checkbox' : variation;
  return (
    <span
      className={classnames(classes.root, classes[variation], className, {
        required: isRequired
      })}
    >
      <label htmlFor={id}>
        <span className={classes.label}>{label}</span>
        <InputTag
          className={classes.input}
          id={id}
          name={id}
          type={inputType}
          defaultChecked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          {...props}
        />
      </label>
    </span>
  );
};

Input.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Id to match the label and input */
  id: PropTypes.string.isRequired,
  /** If true, it will default to being checked */
  isChecked: PropTypes.bool,
  /** If true, it will be disabled */
  isDisabled: PropTypes.bool,
  /** If true, input is required to be filled */
  isRequired: PropTypes.bool,
  /** Text to apply to the label */
  label: PropTypes.string.isRequired,
  /** Type of Input to render */
  variation: PropTypes.oneOf([
    'checkbox',
    'email',
    'file',
    'hidden',
    'number',
    'password',
    'radio',
    'switch',
    'tel',
    'text',
    'textarea'
  ]).isRequired
};

export default injectSheet(styles)(Input);
