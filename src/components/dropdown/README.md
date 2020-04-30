This is a wrapper component around Jed Watson's [`react-select`](https://github.com/JedWatson/react-select) module.

### Variations

#### Dropdown.SingleSelect

```jsx
const Dropdown = require('./index').default;

<Dropdown.SingleSelect
  defaultValue="glossier"
  id="foo-select"
  options={[
    {
      label: 'Forbes',
      value: 'forbes-insights'
    },
    {
      label: 'Glossier',
      value: 'glossier'
    },
    {
      label: 'Perksy',
      value: 'perksy-questions'
    }
  ]}
/>;
```

#### Dropdown.MultiSelect

```jsx
const Dropdown = require('./index').default;

<Dropdown.MultiSelect
  id="bar-select"
  placeholder="Select a Target Consumer Base"
  options={[
    {
      label: 'Canada',
      value: 'canada'
    },
    {
      label: 'United States',
      value: 'usa'
    },
    {
      isDisabled: true,
      label: 'UK',
      value: 'united-kingdom'
    }
  ]}
/>;
```
