import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import Button from '~/components/button';
import Logo from '~/components/logo';
import Navigation from '~/components/navigation';
import User from '~/components/user';

import styles from './styles';

/**
 * Renders a Sidebar.
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  toggleState = () => {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed
    });
  };

  render() {
    const {
      classes,
      className,
      links,
      logoPath,
      variation,
      user,
      ultilityLinks
    } = this.props;
    const isCollapsible = variation === 'collapsible';
    const { isCollapsed } = this.state;

    return (
      <aside
        className={classnames(classes.root, classes[variation], className, {
          collapsed: isCollapsed
        })}
      >
        {isCollapsible && (
          <Button.Info className={classes.toggle} onClick={this.toggleState}>
            X
          </Button.Info>
        )}
        <Logo.White className={classes.logo} path={logoPath} />
        {user && <User.Avatar {...user} className={classes.user} />}
        <Navigation.Vertical className={classes.navigation} links={links} />
        {ultilityLinks && (
          <div className={classes.utility}>
            <Navigation.Vertical
              className={classes.navigation}
              links={ultilityLinks}
            />
          </div>
        )}
      </aside>
    );
  }
}

Sidebar.propTypes = {
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Links to render for the main navigation */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** Link text to display */
      text: PropTypes.string.isRequired,
      /** Link url for href attribute */
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Image path to pass to Logo component */
  logoPath: PropTypes.string,
  /** Type of sidebar to render */
  variation: PropTypes.oneOf(['collapsible', 'static']).isRequired,
  /** The current user object */
  user: PropTypes.object.isRequired,
  /** Links to render at the bottom of the sidebar */
  ultilityLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /** Link text to display */
      text: PropTypes.string.isRequired,
      /** Link url for href attribute */
      url: PropTypes.string.isRequired
    })
  )
};

export default injectSheet(styles)(Sidebar);
