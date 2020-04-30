const React = require('react');

const Button = require('./index').default;

describe('<Button.* />', () => {
  let component;
  const requiredProps = {
    children: 'Click me!'
  };

  describe('<Button.Primary />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Button.Primary {...requiredProps} />,
        'Button'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('add the disabled attribute when isDisabled is true', () => {
      component = shallowUntilTarget(
        <Button.Primary {...requiredProps} isDisabled />,
        'Button'
      );
      expect(component).toBeDisabled();
    });

    it('calls the given onClick method when clicked', () => {
      const mockedMethod = jest.fn();
      component = shallowUntilTarget(
        <Button.Primary {...requiredProps} onClick={mockedMethod} />,
        'Button'
      );
      component.simulate('click');
      expect(mockedMethod).toHaveBeenCalled();
    });
  });

  describe('<Button.Info />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Button.Info {...requiredProps} />,
        'Button'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Button.Success />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Button.Success {...requiredProps} />,
        'Button'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Button.Warning />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Button.Warning {...requiredProps} />,
        'Button'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('<Button.Danger />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Button.Danger {...requiredProps} />,
        'Button'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
