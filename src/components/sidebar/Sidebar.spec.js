const React = require('react');

const Sidebar = require('./index').default;

describe('<Sidebar.* />', () => {
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
    ],
    user: {}
  };

  describe('<Sidebar.Static />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Sidebar.Static {...requiredProps} />,
        'Sidebar'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a Logo.White component', () => {
      expect(component).toContainExactlyOneMatchingElement('White');
    });

    it('does not render a Button.Info', () => {
      expect(component.find('Info')).not.toExist();
    });

    it('renders utility links if they are given', () => {
      component.setProps({
        ultilityLinks: [{ text: 'utility', url: '/link' }]
      });
      expect(component).toContainMatchingElements(2, 'Vertical');
    });
  });

  describe('<Sidebar.Collapsible />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Sidebar.Collapsible {...requiredProps} />,
        'Sidebar'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders a Button.Info to toggle state', () => {
      expect(component.find('Info')).toExist();
    });

    it('adds a `.collapsed` class when the component is collapsed', () => {
      component.setState({
        isCollapsed: true
      });
      expect(component).toHaveClassName('collapsed');
    });

    it('will toggle isCollapsed when Button.Info is clicked', () => {
      component.find('Info').simulate('click');
      expect(component).toHaveClassName('collapsed');
      expect(component).toHaveState({ isCollapsed: true });
      component.find('Info').simulate('click');
      expect(component).not.toHaveClassName('collapsed');
      expect(component).toHaveState({ isCollapsed: false });
    });
  });
});
