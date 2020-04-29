import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import List from '~/components/list';
import './styles.scss';

/**
 * Renders a list item with a link and optional icon.
 */
const NavigationItem = ({ icon, text, url }) => (
  <span className="navigation-item">
    {icon && <span className="navigation-item__icon">{icon}</span>}
    <a className="navigation-item__link" href={url}>
      {text}
    </a>
  </span>
);

NavigationItem.propTypes = {
  /** Icon element */
  icon: PropTypes.element,
  /** Link text to display */
  text: PropTypes.string.isRequired,
  /** Link url for href attribute */
  url: PropTypes.string.isRequired
};

/**
 * Renders a list of links within a nav tag.
 */
const Navigation = ({ links, variation }) => (
  <nav className={classnames('navigation', `navigation--${variation}`)}>
    <List.Unordered
      className="navigation__list"
      items={links}
      onPrerender={NavigationItem}
    />
  </nav>
);

Navigation.propTypes = {
  /** List of link objects { icon, text, url } */
  links: PropTypes.arrayOf(PropTypes.exact(NavigationItem.propTypes))
    .isRequired,
  /** Type of navigation to render */
  variation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired
};

export default Navigation;
