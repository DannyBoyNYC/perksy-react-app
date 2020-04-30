import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders a Tabs component.
 */
class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: 0
    };
  }

  handleTabClick = tabIndex => {
    this.setState({
      activeTabIndex: tabIndex
    });
  };

  render() {
    const { children, className, classes, variation } = this.props;
    const { activeTabIndex } = this.state;
    const activeChild = children[activeTabIndex];

    return (
      <div className={classnames(classes.root, classes[variation], className)}>
        <ul className={classes.tabList} role="tablist">
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              onClick: this.handleTabClick,
              tabIndex: index,
              isActive: index === activeTabIndex
            })
          )}
        </ul>
        <div className={classes.content}>
          {activeChild && activeChild.props.children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  /** Tabs content */
  children: PropTypes.node.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Type of Tabs to render */
  variation: PropTypes.oneOf(['horizontal']).isRequired
};

export default injectSheet(styles)(Tabs);
