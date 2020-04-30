import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import Image from '~/components/image';
import ProgressBar from '~/components/progress-bar';
import styles from './styles';

/**
 * Renders a subset of Campaign data.
 */
const Campaign = ({
  children,
  classes,
  className,
  image,
  name,
  respondents,
  variation
}) => {
  const isRow = variation === 'row';
  const shouldShowImage = variation === 'card' || isRow;
  const isPercentage = variation === 'percentage';
  const shouldShowProgress = variation === 'progress' || isPercentage;
  const ProgressBarComponent = isPercentage
    ? ProgressBar.Percentage
    : ProgressBar.Basic;
  return (
    <div className={classnames(classes.root, classes[variation], className)}>
      {shouldShowImage && <Image.Lazy className={classes.image} {...image} />}
      <div className={classes.name}>{name}</div>
      {isRow && <div className={classes.spacer} />}
      {children && <div className={classes.children}>{children}</div>}
      {shouldShowProgress && (
        <div className={classes.progress}>
          <ProgressBarComponent {...respondents} />
        </div>
      )}
    </div>
  );
};

Campaign.propTypes = {
  /** Additional components to render */
  children: PropTypes.node,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Properties to pass to the Image component */
  image: PropTypes.object,
  /** Name of campaign */
  name: PropTypes.string.isRequired,
  /** Respondents data for campaign */
  respondents: PropTypes.shape({
    /** Current number of respondents */
    current: PropTypes.number.isRequired,
    /** Maximum number of respondents for campaign */
    maximum: PropTypes.number.isRequired
  }),
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
  variation: PropTypes.oneOf(['card', 'percentage', 'progress', 'row'])
    .isRequired
};

export default injectSheet(styles)(Campaign);
