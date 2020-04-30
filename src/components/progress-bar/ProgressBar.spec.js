const React = require('react');

const ProgressBar = require('./index').default;

describe('<ProgressBar.* />', () => {
  let component;
  const requiredProps = {
    current: 100,
    maximum: 1000
  };

  describe('<ProgressBar.Basic />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <ProgressBar.Basic {...requiredProps} />,
        'ProgressBar'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a title if given one', () => {
      component = shallowUntilTarget(
        <ProgressBar.Basic {...requiredProps} title="Title Text" />,
        'ProgressBar'
      );
      expect(component).toIncludeText('Title Text');
    });
  });

  describe('<ProgressBar.Percentage />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <ProgressBar.Percentage {...requiredProps} />,
        'ProgressBar'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render the percentage value', () => {
      expect(component).toIncludeText('10%');
    });
  });
});
