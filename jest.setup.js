import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'react-jss';

import theme from './src/theme.config';

const MAX_TRIES = 10;

/*
 * Create a top level theme context to provide to all components.
 *
 */
function getThemeContext(options = {}) {
  const themeProvider = mount(<ThemeProvider theme={theme} />).instance();

  return {
    context: {
      ...options.context,
      ...themeProvider.getChildContext()
    },
    childContextTypes: {
      ...options.childContextTypes,
      ...themeProvider.constructor.childContextTypes
    }
  };
}

/*
 * Repeatedly dive down a component tree using until finding the desired
 * component by displayName. This is useful for when your components are
 * wrapped in multiple HOCs.
 *
 * The `componentInstance` parameter is a React component instance.
 * Example: <MyComponent {...props} />
 *
 */
function shallowUntilTargetWithTheme(componentInstance, displayName, options) {
  let root = shallow(componentInstance, getThemeContext(options));

  if (typeof root.type() === 'string') {
    throw new Error('Cannot unwrap this component because it is not wrapped.');
  }

  for (let tries = 1; tries <= MAX_TRIES; tries++) {
    if (root.is(displayName)) {
      // Now that we found the target component, return the rendered version.
      return root.dive();
    }
    // Unwrap the next component in the hierarchy.
    root = root.dive();
  }

  throw new Error(
    `Could not find ${displayName} in rendered instance: ${componentInstance}.`
  );
}

/*
 * Implements Enzyme's mount method with a theme context.
 *
 * The `componentInstance` parameter is a React component instance.
 * Example: <MyComponent {...props} />
 *
 */
function mountWithTheme(componentInstance, options) {
  return mount(componentInstance, getThemeContext(options));
}

// Make function available in all test files without importing
global.mountWithTheme = mountWithTheme;
global.shallowUntilTarget = shallowUntilTargetWithTheme;
