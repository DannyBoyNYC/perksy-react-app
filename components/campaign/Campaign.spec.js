const React = require('react');
const { mount, shallow } = require('enzyme');

const Campaign = require('./index').default;

describe('<Campaign.* />', () => {
  let component;
  const requiredProps = {
    name: 'Campaign Name',
    respondents: {
      current: 898,
      maximum: 1112
    }
  };

  describe('<Campaign.Card />', () => {
    beforeEach(() => {
      component = shallow(<Campaign.Card {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('campaign campaign--card');
    });
  });

  describe('<Campaign.Progress />', () => {
    beforeEach(() => {
      component = shallow(<Campaign.Progress {...requiredProps} />).dive();
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have the correct BEM class names', () => {
      expect(component).toHaveClassName('campaign campaign--progress');
    });

    it('should render a ProgressBar', () => {
      component = mount(<Campaign.Progress {...requiredProps} />);
      expect(component.find('ProgressBar')).toExist();
    });
  });
});
