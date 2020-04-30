const React = require('react');

const Input = require('./index').default;

describe('<Input.* />', () => {
  let component;
  const requiredProps = {
    id: 'foo',
    label: 'Foo label'
  };

  describe('<Input.Checkbox />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Checkbox {...requiredProps} isChecked isDisabled isRequired />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a checked input if isChecked is passed', () => {
      expect(component.find('input')).toBeChecked();
    });

    it('should render a disabled input if isDisabled is passed', () => {
      expect(component.find('input')).toBeDisabled();
    });

    it('should render a required input if isRequired is passed', () => {
      expect(component.find('input')).toHaveProp('required', true);
    });
  });

  describe('<Input.Email />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Email {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.File />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.File {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Hidden />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Hidden {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Number />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Number {...requiredProps} max={80} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Password />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Password {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Radio />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Radio {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Switch />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Switch {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Tel />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(<Input.Tel {...requiredProps} />, 'Input');
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Text />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Text {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Input.Textarea />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Input.Textarea {...requiredProps} />,
        'Input'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
