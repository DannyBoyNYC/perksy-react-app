const React = require('react');
const { mount, shallow } = require('enzyme');

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
      component = shallow(<Navigation.Horizontal {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('navigation navigation--horizontal');
    });

    it('will render icons when passed', () => {
      const linksWithIcons = [
        {
          icon: <i className="fas fa-check" />,
          text: 'Done',
          url: '#'
        },
        {
          icon: <i className="far fa-square" />,
          text: 'To Do',
          url: '#'
        }
      ];
      component = mount(<Navigation.Horizontal links={linksWithIcons} />);
      expect(component).toContainMatchingElements(2, '.navigation-item__icon');
    });
  });

  describe('<Navigation.Vertical />', () => {
    beforeEach(() => {
      component = shallow(<Navigation.Vertical {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('navigation navigation--vertical');
    });
  });
});
