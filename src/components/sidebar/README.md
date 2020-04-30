### Variations

#### Sidebar.Collapsible

```jsx
const Sidebar = require('./index').default;

<Sidebar.Collapsible
  links={[
    {
      text: 'Dashboard',
      url: '/'
    },
    {
      text: 'Campaigns',
      url: '/campaigns'
    }
  ]}
  logoPath="/logo_white.svg"
  ultilityLinks={[
    {
      text: 'Settings',
      url: '/settings'
    },
    {
      text: 'Logout',
      url: '#'
    }
  ]}
  user={{
    brandName: 'Perksy',
    firstName: 'Jane',
    lastName: 'Doe'
  }}
/>;
```

#### Sidebar.Static

```jsx
const Sidebar = require('./index').default;

<Sidebar.Static
  links={[
    {
      text: 'Dashboard',
      url: '/'
    },
    {
      text: 'Campaigns',
      url: '/campaigns'
    }
  ]}
  logoPath="/logo_white.svg"
  user={{
    brandName: 'Forbes',
    firstName: 'John',
    lastName: 'Smith'
  }}
/>;
```
