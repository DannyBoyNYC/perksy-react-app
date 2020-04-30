const React = require('react');

const List = require('./index').default;

describe('<List.* />', () => {
  let component;
  const requiredProps = {
    items: ['foo', 'bar']
  };

  describe('<List.Unordered />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <List.Unordered {...requiredProps} />,
        'List'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a <ul> tag', () => {
      expect(component).toMatchSelector('ul');
    });

    it('should apply the onPrerender method to each item if one is given', () => {
      const mockPrerender = jest.fn();
      component = shallowUntilTarget(
        <List.Unordered {...requiredProps} onPrerender={mockPrerender} />,
        'List'
      );
      expect(mockPrerender.mock.calls).toHaveLength(2);
      expect(mockPrerender.mock.calls[0][0]).toBe('foo');
      expect(mockPrerender.mock.calls[1][0]).toBe('bar');
    });
  });

  describe('<List.Ordered />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <List.Ordered {...requiredProps} />,
        'List'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a <ol> tag', () => {
      expect(component).toMatchSelector('ol');
    });
  });
});
