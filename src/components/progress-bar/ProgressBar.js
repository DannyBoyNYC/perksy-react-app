import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a progress bar.
 */
const ProgressBar = ({
  classes,
  className,
  current,
  maximum,
  title,
  variation
}) => {
  const percentageLabel = `${current} / ${maximum}`;
  const percentage = Math.round((current / maximum) * 100);
  const shouldShowPercentage = variation === 'percentage';

  return (
    <div className={classnames(classes.root, classes[variation], className)}>
      {title && <div className={classes.title}>{title}</div>}
      {percentageLabel && (
        <div className={classes.label}>{percentageLabel}</div>
      )}
      <div className={classes.bar}>
        <div className={classes.filler} style={{ width: `${percentage}%` }} />
      </div>
      {shouldShowPercentage && (
        <div className={classes.percentageValue}>{percentage}%</div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Current value out of maximum amount */
  current: PropTypes.number.isRequired,
  /** Total number to divide by */
  maximum: PropTypes.number.isRequired,
  /** Title to label the data */
  title: PropTypes.string,
  /** Type of progress bar to render */
  variation: PropTypes.oneOf(['basic', 'percentage']).isRequired
};

export default injectSheet(styles)(ProgressBar);
