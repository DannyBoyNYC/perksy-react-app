import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a list of items ordered or unordered.
 */
const List = ({ classes, className, items, onPrerender, variation }) => {
  const ListTag = variation === 'ordered' ? 'ol' : 'ul';
  return (
    <ListTag
      className={classnames(classes.root, classes[variation], className)}
    >
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={classes.item} key={`item-${index}`}>
          {onPrerender ? onPrerender(item) : item}
        </li>
      ))}
    </ListTag>
  );
};

List.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** List of either item objects or item strings */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
  /** Method called on each item prior to rendering */
  onPrerender: PropTypes.func,
  /** Type of list to render */
  variation: PropTypes.oneOf(['ordered', 'unordered']).isRequired
};

export default injectSheet(styles)(List);
