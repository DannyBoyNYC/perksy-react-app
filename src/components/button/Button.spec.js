const { expect } = require('chai');
const React = require('react');
const { shallow } = require('enzyme');

const Button = require('./Button');

describe('<Button.* />', function() {
  const children = 'Click me!';
  let component;

  describe('<Button.Primary />', function() {
    before(function() {
      component = shallow(<Button.Primary>{children}</Button.Primary>);
    });

    after(function() {
      component = null;
    });

    it('forwards props, and passes additional props, to child', function() {
      const props = {
        children,
        type: 'primary'
      };
      expect(component.props()).to.deep.equal(props);
    });
  });
});
