const React = require('react');
const { shallow } = require('enzyme');

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
      component = shallow(<User.Avatar {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('user user--avatar');
    });
  });
});
