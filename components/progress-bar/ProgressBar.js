import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a progress bar.
 */
const ProgressBar = ({
  count,
  shouldShowPercentage,
  title,
  total,
  variation
}) => {
  const percentageLabel = `${count} / ${total}`;
  const percentage = Math.round((count / total) * 100);

  return (
    <div className={classnames('progress-bar', `progress-bar--${variation}`)}>
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
  /** Number to ... */
  count: PropTypes.number.isRequired,
  /** When true percentage value is rendered */
  shouldShowPercentage: PropTypes.bool,
  /** Title to label the data */
  title: PropTypes.string,
  /** Total number to divide by */
  total: PropTypes.number.isRequired,
  /** Type of progress bar to render */
  variation: PropTypes.oneOf(['percentage']).isRequired
};

export default ProgressBar;
