const React = require('react');

const Status = require('./index').default;

describe('<Status.* />', () => {
  let component;
  const requiredProps = {
    code: 'draft'
  };

  describe('<Status.Button />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Status.Button {...requiredProps} />,
        'Status'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders prefix text before status if given', () => {
      component.setProps({
        prefix: 'Before words '
      });
      expect(component).toHaveText('Before words Draft');
    });

    it('renders suffix text after status if given', () => {
      component.setProps({
        suffix: ' after words'
      });
      expect(component).toHaveText('Draft after words');
    });
  });

  describe('<Status.Title />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(<Status.Title code="live" />, 'Status');
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
