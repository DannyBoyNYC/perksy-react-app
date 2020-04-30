### Variations

#### Block.CampaignPercentage

```jsx
const Block = require('./index').default;

<Block.CampaignPercentage
  heading="Total Campaign Responses"
  items={[
    {
      name: 'Job Hunt Stack',
      respondents: {
        current: 12294,
        maximum: 20000
      }
    },
    {
      name: 'Perksy Rewards Questions',
      respondents: {
        current: 11821,
        maximum: 20000
      }
    },
    {
      name: 'College Athletes',
      respondents: {
        current: 2923,
        maximum: 20000
      }
    },
    {
      name: 'NEA Test',
      respondents: {
        current: 136,
        maximum: 1000
      }
    },
    {
      name: 'High School Athletes',
      respondents: {
        current: 2653,
        maximum: 20000
      }
    }
  ]}
/>;
```

#### Block.CampaignRow

```jsx
const Block = require('./index').default;

<Block.CampaignRow
  heading="Recently Ended Campaigns"
  items={[
    {
      image: {
        altText: 'A mixed drink in a blue cup',
        height: 40,
        src:
          'https://media0.giphy.com/media/3ornjYogiWwWE5u8sU/giphy-downsized.gif',
        width: 60
      },
      name: 'Alcohol Consumption Report',
      respondents: {
        current: 1016,
        maximum: 1000
      }
    },
    {
      image: {
        altText: 'Two people on a couch watching TV',
        height: 40,
        src: 'https://media1.giphy.com/media/3o6fJ4mwcPM9tOQVkA/giphy.gif',
        width: 60
      },
      name: 'Morning Shows Stack',
      respondents: {
        current: 500,
        maximum: 500
      }
    },
    {
      image: {
        altText: 'A woman throwing food into a grocery shopping cart',
        height: 40,
        src:
          'https://media0.giphy.com/media/3o6Zt44pYU1sj5vzVK/giphy-downsized.gif',
        width: 60
      },
      name: 'Grocery Stack',
      respondents: {
        current: 2000,
        maximum: 2000
      }
    }
  ]}
/>;
```
