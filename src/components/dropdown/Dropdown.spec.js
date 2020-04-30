const React = require('react');

const Dropdown = require('./index').default;

describe('<Dropdown.* />', () => {
  let component;
  const requiredProps = {
    id: 'foo',
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
      component = shallowUntilTarget(
        <Dropdown.SingleSelect {...requiredProps} />,
        'Dropdown'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render label text if one is passed', () => {
      component.setProps({
        label: 'Select label text'
      });
      expect(component).toIncludeText('Select label text');
    });

    it('will set the default value of the select based on option value', () => {
      component = shallowUntilTarget(
        <Dropdown.SingleSelect {...requiredProps} defaultValue="bar" />,
        'Dropdown'
      );
      const barOption = requiredProps.options[1];
      expect(component.children().prop('defaultValue')).toEqual([barOption]);
    });
  });

  describe('<Dropdown.MultiSelect />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Dropdown.MultiSelect {...requiredProps} />,
        'Dropdown'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
