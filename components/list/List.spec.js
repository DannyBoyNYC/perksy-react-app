const React = require('react');
const { shallow } = require('enzyme');

const List = require('./index').default;

describe('<List.* />', () => {
  let component;
  const requiredProps = {
    items: ['foo', 'bar']
  };

  describe('<List.Unordered />', () => {
    beforeEach(() => {
      component = shallow(<List.Unordered {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('list list--unordered');
    });

    it('should render a <ul> tag', () => {
      expect(component).toMatchSelector('ul');
    });
  });

  describe('<List.Ordered />', () => {
    beforeEach(() => {
      component = shallow(<List.Ordered {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('list list--ordered');
    });

    it('should render a <ol> tag', () => {
      expect(component).toMatchSelector('ol');
    });
  });
});
