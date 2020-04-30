import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a Tab panel item.
 */
const Panel = ({
  classes,
  className,
  isActive,
  isDisabled,
  onClick,
  tabIndex,
  title
}) => (
  <li
    className={classnames(classes.tabItem, className, {
      active: isActive,
      disabled: isDisabled
    })}
    onClick={event => {
      event.preventDefault();
      if (!isDisabled) {
        onClick(tabIndex);
      }
    }}
    onKeyPress={event => {
      if (event.key === 'Enter' && !isDisabled) {
        event.preventDefault();
        onClick(tabIndex);
      }
    }}
    role="tab"
  >
    <span>{title}</span>
  </li>
);

Panel.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** If true, this panel is currently in view */
  isActive: PropTypes.bool,
  /** If true, this panel is disabled */
  isDisabled: PropTypes.bool,
  /** Method called when panel is clicked */
  onClick: PropTypes.func.isRequired,
  /** Index of this panel */
  tabIndex: PropTypes.number.isRequired,
  /** Name of this panel */
  title: PropTypes.node.isRequired
};

export default injectSheet(styles)(Panel);
