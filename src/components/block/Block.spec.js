const React = require('react');

const Block = require('./index').default;

describe('<Block.* />', () => {
  let component;
  const requiredProps = {
    items: [
      {
        name: 'Foo',
        respondents: {
          current: 100
        }
      },
      {
        name: 'Bar',
        respondents: {
          current: 1000
        }
      },
      {
        name: 'Baz',
        respondents: {
          current: 10000
        }
      }
    ]
  };

  describe('<Block.CampaignPercentage />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Block.CampaignPercentage {...requiredProps} />,
        'Block'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a Campaign.Percentage for each item', () => {
      expect(component).toContainMatchingElements(3, 'Percentage');
    });

    it('should render a heading if given one', () => {
      component.setProps({
        heading: 'Title content'
      });
      expect(component).toIncludeText('Title content');
    });

    it('should render a div with the word `None` if items is empty', () => {
      component.setProps({
        items: []
      });
      expect(component).toHaveText('None');
    });
  });

  describe('<Block.CampaignRow />', () => {
    beforeEach(() => {
      component = shallowUntilTarget(
        <Block.CampaignRow {...requiredProps} />,
        'Block'
      );
    });

    it('should render correctly with all required props', () => {
      expect(component).toMatchSnapshot();
    });

    it('should render a Campaign.Row for each item', () => {
      expect(component).toContainMatchingElements(3, 'Row');
    });
  });
});
