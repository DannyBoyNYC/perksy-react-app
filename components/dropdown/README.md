This is a wrapper component around Jed Watson's [`react-select`](https://github.com/JedWatson/react-select) module.

### Variations

#### SingleSelect:

```jsx
const Dropdown = require('./index').default;

const OptionWithImage = () => (
  <div>
    <image url="https://perksy-question-images-prod.s3.amazonaws.com/20x20/adfde321-698b-4238-a9fa-ad3c1ebb2f90.png" />
    Perksy
  </div>
);

<Dropdown.SingleSelect
  defaultValue="glossier"
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

#### MultiSelect:

```jsx
const Dropdown = require('./index').default;

<Dropdown.MultiSelect
  placeholderText="Select a Target Consumer Base..."
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
