const React = require('react');
const { shallow } = require('enzyme');

const Status = require('./index').default;

describe('<Status.* />', () => {
  let component;
  const requiredProps = {
    code: 'draft'
  };

  describe('<Status.Button />', () => {
    beforeEach(() => {
      component = shallow(<Status.Button {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('status status--button');
    });
  });
});
