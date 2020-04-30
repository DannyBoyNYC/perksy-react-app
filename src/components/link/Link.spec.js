const React = require('react');
const PropTypes = require('prop-types');

const Link = require('./index').default;

describe('<Link.* />', () => {
  let component;
  const requiredProps = {
    children: <a>Text</a>,
    href: '#'
  };

  describe('<Link.Next />', () => {
    beforeEach(() => {
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
      component = shallowUntilTarget(
        <Link.Next {...requiredProps} />,
        'Link',
        options
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
