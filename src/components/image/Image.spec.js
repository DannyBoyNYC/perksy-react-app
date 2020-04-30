const React = require('react');

const Image = require('./index').default;

describe('<Image.* />', () => {
  let component;
  const requiredProps = {
    altText: 'Foo image',
    height: 100,
    src: '/foo.jpg'
  };

  describe('<Image.Lazy />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Image.Lazy {...requiredProps} />,
        'Image'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
