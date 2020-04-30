import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

const STATUS_CODES = {
  draft: 'Draft',
  in_review: 'In Review',
  scheduled: 'Scheduled',
  live: 'Active',
  finished: 'Finished',
  archived: 'Archived'
};

/**
 * Renders a campaign status.
 */
const Status = ({ classes, className, code, prefix, suffix, variation }) => (
  <div className={classnames(classes.root, classes[variation], className)}>
    {prefix && <span className={classes.prefix}>{prefix}</span>}
    <span className={classes.code}>{STATUS_CODES[code]}</span>
    {suffix && <span className={classes.suffix}>{suffix}</span>}
  </div>
);

Status.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
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
  /** Additional text to add before the status */
  prefix: PropTypes.string,
  /** Additional text to add after the status */
  suffix: PropTypes.string,
  /** Type of status to render */
  variation: PropTypes.oneOf(['button', 'title']).isRequired
};

export default injectSheet(styles)(Status);
