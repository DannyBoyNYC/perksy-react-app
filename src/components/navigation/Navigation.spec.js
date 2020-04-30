const React = require('react');
const PropTypes = require('prop-types');

const Navigation = require('./index').default;

describe('<Navigation.* />', () => {
  let component;
  const requiredProps = {
    links: [
      {
        text: 'Foo',
        url: '#'
      },
      {
        text: 'Bar',
        url: '#'
      }
    ]
  };

  describe('<Navigation.Horizontal />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Navigation.Horizontal {...requiredProps} />,
        'Navigation'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a link for each item', () => {
      const options = {
        context: {
          router: {
            prefetch: () => {},
            route: '/mock-route',
            pathname: 'mock-path'
          }
        },
        childContextTypes: {
          router: PropTypes.object
        }
      };
      component = mountWithTheme(
        <Navigation.Horizontal {...requiredProps} />,
        options
      );
      expect(component).toContainMatchingElements(2, 'a');
    });
  });

  describe('<Navigation.Vertical />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Navigation.Vertical {...requiredProps} />,
        'Navigation'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
