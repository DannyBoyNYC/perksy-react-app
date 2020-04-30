const React = require('react');

const Tabs = require('./index').default;

describe('<Tabs.* />', () => {
  let component;
  const requiredProps = {
    children: [
      <Tabs.Panel title="Title for content 1">
        <p>Content 1</p>
      </Tabs.Panel>,
      <Tabs.Panel title="Title for content 2">
        <p>Content 2</p>
      </Tabs.Panel>
    ]
  };

  describe('<Tabs.Horizontal />', () => {
    beforeEach(() => {
      component = mountWithTheme(
        <Tabs.Horizontal {...requiredProps} />,
        'Tabs'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render each Panel', () => {
      expect(component).toContainMatchingElements(2, 'Panel');
    });

    it('should default the active Panel to the first Panel', () => {
      component = shallowUntilTarget(
        <Tabs.Horizontal {...requiredProps} />,
        'Tabs'
      );
      expect(component).toHaveState({ activeTabIndex: 0 });
    });

    it('should render the content of the active Panel', () => {
      expect(component).toIncludeText('Content 1');
    });

    it('should update the active Panel on click', () => {
      component
        .find('Panel')
        .last()
        .simulate('click');
      expect(component).toIncludeText('Content 2');
    });
  });
});
