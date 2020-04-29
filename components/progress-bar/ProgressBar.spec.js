const React = require('react');
const { shallow } = require('enzyme');

const ProgressBar = require('./index').default;

describe('<ProgressBar.* />', () => {
  let component;
  const requiredProps = {
    current: 100,
    maximum: 1000
  };

  describe('<ProgressBar.Basic />', () => {
    beforeEach(() => {
      component = shallow(<ProgressBar.Basic {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('progress-bar progress-bar--basic');
    });

    it('should render a title if given one', () => {
      component = shallow(
        <ProgressBar.Basic {...requiredProps} title="Title Text" />
      ).dive();
      expect(component.find('.progress-bar__title')).toHaveText('Title Text');
    });
  });

  describe('<ProgressBar.Percentage />', () => {
    beforeEach(() => {
      component = shallow(<ProgressBar.Percentage {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName(
        'progress-bar progress-bar--percentage'
      );
    });

    it('should render the percentage value', () => {
      expect(component.find('.progress-bar__percentage')).toHaveText('10%');
    });
  });
});
