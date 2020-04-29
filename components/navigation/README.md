### Variations

#### Horizontal:

```jsx
const Navigation = require('./index').default;

<Navigation.Horizontal
  links={[
    {
      text: 'Queues',
      url: '#'
    },
    {
      text: 'OAuth',
      url: '#'
    },
    {
      text: 'Features',
      url: '#'
    }
  ]}
/>;
```

#### Vertical:

```jsx
const Navigation = require('./index').default;

<Navigation.Vertical
  links={[
    {
      text: 'Dashboard',
      url: '#'
    },
    {
      text: 'Campaigns',
      url: '#'
    },
    {
      text: 'Analytics',
      url: '#'
    }
  ]}
/>;
```
