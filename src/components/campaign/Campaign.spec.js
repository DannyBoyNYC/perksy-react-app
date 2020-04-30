const React = require('react');

const Campaign = require('./index').default;

describe('<Campaign.* />', () => {
  let component;
  const requiredProps = {
    name: 'Campaign Name',
    respondents: {
      current: 898,
      maximum: 1112
    }
  };

  describe('<Campaign.Card />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Campaign.Card {...requiredProps} />,
        'Campaign'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render children if passed', () => {
      component.setProps({
        children: <div>child content</div>
      });
      expect(component).toIncludeText('child content');
    });

    it('should render an Image.Lazy', () => {
      expect(component).toContainExactlyOneMatchingElement('Lazy');
    });
  });

  describe('<Campaign.Percentage />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Campaign.Percentage {...requiredProps} />,
        'Campaign'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a ProgressBar.Percentage', () => {
      expect(component).toContainExactlyOneMatchingElement('Percentage');
    });
  });

  describe('<Campaign.Progress />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Campaign.Progress {...requiredProps} />,
        'Campaign'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a ProgressBar.Basic', () => {
      expect(component).toContainExactlyOneMatchingElement('Basic');
    });
  });

  describe('<Campaign.Row />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Campaign.Row {...requiredProps} />,
        'Campaign'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render an Image.Lazy', () => {
      expect(component).toContainExactlyOneMatchingElement('Lazy');
    });
  });
});
