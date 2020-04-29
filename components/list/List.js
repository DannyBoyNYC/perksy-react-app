import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders a list of items in an ordered or unordered list.
 */
const List = ({ className, items, onPrerender, variation }) => {
  const ListTag = variation === 'ordered' ? 'ol' : 'ul';
  return (
    <ListTag className={classnames('list', `list--${variation}`, className)}>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className="list-item" key={index}>
          {onPrerender ? onPrerender(item) : item}
        </li>
      ))}
    </ListTag>
  );
};

List.propTypes = {
  /** Top level class name to add to component */
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

export default List;
