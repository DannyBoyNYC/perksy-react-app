const React = require('react');

const Columns = require('./index').default;

describe('<Columns.* />', () => {
  let component;
  const requiredProps = {
    children: <div className="content" />
  };

  describe('<Columns.Even />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Columns.Even {...requiredProps} />,
        'Columns'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('adds a `wrap` class if shouldWrap is true', () => {
      component.setProps({
        shouldWrap: true
      });
      expect(component).toHaveClassName('wrap');
    });
  });

  describe('<Columns.OneSpanTwo />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Columns.OneSpanTwo {...requiredProps} />,
        'Columns'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Columns.SpanTwoOne />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Columns.SpanTwoOne {...requiredProps} />,
        'Columns'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Columns.SpanThreeSpanTwo />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Columns.SpanThreeSpanTwo {...requiredProps} />,
        'Columns'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
