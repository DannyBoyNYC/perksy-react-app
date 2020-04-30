const React = require('react');

const Panel = require('./Panel').default;

describe('<Panel />', () => {
  let component;
  const onClickMethod = jest.fn();
  const requiredProps = {
    onClick: onClickMethod,
    tabIndex: 0,
    title: 'Title content'
  };

  beforeEach(() => {
    component = shallowUntilTarget(<Panel {...requiredProps} />, 'Panel');
  });

  afterEach(() => {
    onClickMethod.mockReset();
  });

  it('should render correctly with all required props', () => {
    expect(component).toMatchSnapshot();
  });

  it('adds an `active` class if isActive is true', () => {
    component.setProps({
      isActive: true
    });
    expect(component).toHaveClassName('active');
  });

  it('adds a `disabled` class if isDisabled is true', () => {
    component.setProps({
      isDisabled: true
    });
    expect(component).toHaveClassName('disabled');
  });

  it('should call the given onClick method when clicked', () => {
    component.simulate('click', { preventDefault: () => {} });
    expect(onClickMethod).toHaveBeenCalled();
    expect(onClickMethod.mock.calls[0][0]).toBe(0);
  });

  it('should not call the given onClick method when a disabled item is clicked', () => {
    component.setProps({
      isDisabled: true
    });
    component.simulate('click', { preventDefault: () => {} });
    expect(onClickMethod).not.toHaveBeenCalled();
  });

  it('should call the given onClick method when the Enter key is pressed', () => {
    component.simulate('keypress', { key: 'Enter', preventDefault: () => {} });
    expect(onClickMethod).toHaveBeenCalled();
    expect(onClickMethod.mock.calls[0][0]).toBe(0);
  });

  it('should not call the given onClick method for a disabled item when the Enter key is pressed', () => {
    component.setProps({
      isDisabled: true
    });
    component.simulate('keypress', { key: 'Enter', preventDefault: () => {} });
    expect(onClickMethod).not.toHaveBeenCalled();
  });

  it('should not call the given onClick method when the Enter key is not pressed', () => {
    component.simulate('keypress', { key: 'Space', preventDefault: () => {} });
    expect(onClickMethod).not.toHaveBeenCalled();
  });
});
