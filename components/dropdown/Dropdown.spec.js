const React = require('react');
const { mount, shallow } = require('enzyme');

const Dropdown = require('./index').default;

describe('<Dropdown.* />', () => {
  let component;
  const requiredProps = {
    options: [
      {
        label: 'Foo',
        value: 'foo'
      },
      {
        label: 'Bar',
        value: 'bar'
      }
    ]
  };

  beforeEach(() => {
    jest.mock('react-select', () => 'Select');
  });

  describe('<Dropdown.SingleSelect />', () => {
    beforeEach(() => {
      component = shallow(<Dropdown.SingleSelect {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('dropdown dropdown--single-select');
    });

    it('will set the default value of the select based on option value', () => {
      component = mount(
        <Dropdown.SingleSelect {...requiredProps} defaultValue="bar" />
      );
      expect(component.find('.dropdown__single-value')).toHaveText('Bar');
    });
  });

  describe('<Dropdown.MultiSelect />', () => {
    beforeEach(() => {
      component = shallow(<Dropdown.MultiSelect {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('dropdown dropdown--multi-select');
    });
  });
});
