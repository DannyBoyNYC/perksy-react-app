const React = require('react');

const Sticky = require('./index').default;

describe('<Sticky.* />', () => {
  let component;
  const requiredProps = {
    children: <div className="child" />
  };

  describe('<Sticky.Bottom />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Sticky.Bottom {...requiredProps} />,
        'Sticky'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Sticky.Top />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Sticky.Top {...requiredProps} />,
        'Sticky'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
