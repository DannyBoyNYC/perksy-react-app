const React = require('react');

const User = require('./index').default;

describe('<User.* />', () => {
  let component;
  const requiredProps = {
    brandName: 'Perksy',
    firstName: 'Jane',
    lastName: 'Doe'
  };

  describe('<User.Avatar />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <User.Avatar {...requiredProps} />,
        'User'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
