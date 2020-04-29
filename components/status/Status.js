import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

const STATUS_CODES = {
  draft: 'Draft',
  in_review: 'In Review',
  scheduled: 'Scheduled',
  live: 'Live',
  finished: 'Ended',
  archived: 'Archived'
};

/**
 * Renders a campaign status.
 */
const Status = ({ className, code, variation }) => (
  <div className={classnames('status', `status--${variation}`, className)}>
    <span className="status__code">{STATUS_CODES[code]}</span>
  </div>
);

Status.propTypes = {
  /** Top level class name to add to component */
  className: PropTypes.string,
  /** Maps to the campaign state code */
  code: PropTypes.oneOf([
    'draft',
    'in_review',
    'scheduled',
    'live',
    'finished',
    'archived'
  ]).isRequired,
  /** Type of status to render */
  variation: PropTypes.oneOf(['button']).isRequired
};

export default Status;
