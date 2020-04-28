import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Renders a list of items in an ordered or unordered list.
 */
const List = ({ className, items, onPrerender, variation }) => {
  const ListTag = variation === 'ordered' ? 'ol' : 'ul';
  return (
    <ListTag className={classnames('list', `list--${variation}`, className)}>
      {items.map((item, index) => (
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
  /** List of either item nodes or item objects */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  ).isRequired,
  /** Method called on each item prior to rendering */
  onPrerender: PropTypes.func,
  /** Type of list to render */
  variation: PropTypes.oneOf(['ordered', 'unordered']).isRequired
};

export default List;
