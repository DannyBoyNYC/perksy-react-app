import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from '../list';
import './styles.scss';

/**
 * Renders a list item with an optional icon and link.
 */
function onPrerender({ iconClass, text, url }){
  return (
    <span>
      {iconClass && <i className={classnames('list-item__icon', iconClass)} />}
      <a className="list-item__link" href={url}>
        {text}
      </a>
    </span>
  );
}

/**
 * Renders a list of links within a nav tag.
 */
const Navigation = ({ links, variation }) => (
  <nav className={classnames('navigation', `navigation--${variation}`)}>
    <List.Unordered
      className="navigation__list"
      items={links}
      onPrerender={onPrerender}
    />
  </nav>
);

Navigation.propTypes = {
  /** List of link objects */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** Font Awesome icon class */
      iconClass: PropTypes.string,
      /** Link text to display */
      text: PropTypes.string.isRequired,
      /** Link url for href attribute */
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Type of navigation to render */
  variation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired
};

export default Navigation;
