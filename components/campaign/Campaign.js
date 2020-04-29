import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ProgressBar from '~/components/progress-bar';
import './styles.scss';

/**
 * Renders a subset of Campaign data.
 */
const Campaign = ({ children, className, name, respondents, variation }) => {
  const shouldShowProgress = variation === 'progress';
  return (
    <div
      className={classnames('campaign', `campaign--${variation}`, className)}
    >
      <div className="campaign__image" />
      <div className="campaign__name">{name}</div>
      <div className="campaign__additional-components">{children}</div>
      {shouldShowProgress && (
        <div className="campaign__progress">
          <ProgressBar.Basic {...respondents} />
        </div>
      )}
    </div>
  );
};

Campaign.propTypes = {
  /** Additional components to render */
  children: PropTypes.node,
  /** Top level class name to add to component */
  className: PropTypes.string,
  /** Name of campaign */
  name: PropTypes.string.isRequired,
  /** Respondents data for campaign */
  respondents: PropTypes.shape({
    /** Current number of respondents */
    current: PropTypes.number,
    /** Maximum number of respondents for campaign */
    maximum: PropTypes.number
  }).isRequired,
  /** Status of campaign with start and end dates */
  status: PropTypes.shape({
    /** Maps to the campaign state code */
    code: PropTypes.string,
    /** Date string of when campaign ends */
    endDate: PropTypes.string,
    /** Date string of when campaign starts */
    startDate: PropTypes.string // what about start immediately?
  }),
  /** Type of campaign to render */
  variation: PropTypes.oneOf(['card', 'progress']).isRequired
};

export default Campaign;
