import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a certain number of columns with children inside.
 */
const Columns = ({ children, classes, className, shouldWrap, variation }) => (
  <div
    className={classnames(classes.root, classes[variation], className, {
      wrap: shouldWrap
    })}
  >
    {React.Children.map(children, child => (
      <div className="column">{child}</div>
    ))}
  </div>
);

Columns.propTypes = {
  /** Content to render inside column */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** If true columns will wrap */
  shouldWrap: PropTypes.bool,
  /** Type of Columns to render */
  variation: PropTypes.oneOf([
    'even',
    'one-span-two',
    'span-two-one',
    'span-three-span-two'
  ]).isRequired
};

export default injectSheet(styles)(Columns);
