const React = require('react');
const { shallow } = require('enzyme');

const Button = require('./index').default;

describe('<Button.* />', () => {
  let component;
  const requiredProps = {
    children: 'Click me!'
  };

  describe('<Button.Primary />', () => {
    beforeEach(() => {
      component = shallow(<Button.Primary {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('button button--primary');
    });

    it('add the disabled attribute when isDisabled is true', () => {
      component = shallow(
        <Button.Primary {...requiredProps} isDisabled />
      ).dive();
      expect(component).toBeDisabled();
    });

    it('add a disabled class when isDisabled is true', () => {
      component = shallow(
        <Button.Primary {...requiredProps} isDisabled />
      ).dive();
      expect(component).toHaveClassName('button--disabled');
    });

    it('calls the given onClick method when clicked', () => {
      const mockedMethod = jest.fn();
      component = shallow(
        <Button.Primary {...requiredProps} onClick={mockedMethod} />
      );
      component.simulate('click');
      expect(mockedMethod).toHaveBeenCalled();
    });
  });

  describe('<Button.Info />', () => {
    beforeEach(() => {
      component = shallow(<Button.Info {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('button button--info');
    });
  });

  describe('<Button.Success />', () => {
    beforeEach(() => {
      component = shallow(<Button.Success {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('button button--success');
    });
  });

  describe('<Button.Warning />', () => {
    beforeEach(() => {
      component = shallow(<Button.Warning {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('button button--warning');
    });
  });

  describe('<Button.Danger />', () => {
    beforeEach(() => {
      component = shallow(<Button.Danger {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('button button--danger');
    });
  });
});
