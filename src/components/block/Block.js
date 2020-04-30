import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import Campaign from '~/components/campaign';
import styles from './styles';

const COMPONENT_MAP = {
  'campaign-percentage': Campaign.Percentage,
  'campaign-row': Campaign.Row
};

/**
 * Renders a Block of items.
 */
const Block = ({ classes, className, heading, items, variation }) => {
  const ItemComponent = COMPONENT_MAP[variation];
  return (
    <div className={classnames(classes.root, classes[variation], className)}>
      {heading && <p className={classes.heading}>{heading}</p>}
      {items.length === 0 && <div className={classes.empty}>None</div>}
      {items.map((item, index) => (
        <ItemComponent
          {...item}
          className={classes.item}
          // eslint-disable-next-line react/no-array-index-key
          key={`block-${index}`}
        />
      ))}
    </div>
  );
};

Block.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Heading of the items */
  heading: PropTypes.string,
  /** Items to iterate over for the block */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Type of Block to render */
  variation: PropTypes.oneOf(['campaign-percentage', 'campaign-row']).isRequired
};

export default injectSheet(styles)(Block);
