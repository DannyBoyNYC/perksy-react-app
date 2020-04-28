import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

/**
 * Renders an list item with a link.
 */
const ListItem = ({ iconClass, text, url }) => (
  <li className="navigation__list-item list-item">
    {iconClass && <i className={classnames('list-item__icon', iconClass)} />}
    <a className="list-item__link" href={url}>
      {text}
    </a>
  </li>
);

/**
 * Renders a list of links within a nav tag.
 */
const Navigation = ({ links, variation }) => (
  <nav className={classnames('navigation', `navigation--${variation}`)}>
    <ul className="navigation__list">
      {links.map((link, index) => (
        <ListItem {...link} key={index} />
      ))}
    </ul>
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
