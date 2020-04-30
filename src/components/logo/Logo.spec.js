const React = require('react');

const Logo = require('./index').default;

describe('<Logo.* />', () => {
  let component;
  const requiredProps = {};

  describe('<Logo.Black />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(<Logo.Black {...requiredProps} />, 'Logo');
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Logo.White />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(<Logo.White {...requiredProps} />, 'Logo');
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
