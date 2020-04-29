import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a progress bar.
 */
const ProgressBar = ({ className, current, maximum, title, variation }) => {
  const percentageLabel = `${current} / ${maximum}`;
  const percentage = Math.round((current / maximum) * 100);
  const shouldShowPercentage = variation === 'percentage';

  return (
    <div
      className={classnames(
        'progress-bar',
        `progress-bar--${variation}`,
        className
      )}
    >
      {title && <div className="progress-bar__title">{title}</div>}
      {percentageLabel && (
        <div className="progress-bar__label">{percentageLabel}</div>
      )}
      <div className="progress-bar__bar">
        <div
          className="progress-bar__filler"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {shouldShowPercentage && (
        <div className="progress-bar__percentage">{percentage}%</div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  /** Top level class name to add to component */
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

export default ProgressBar;
