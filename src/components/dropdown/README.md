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
  label="Brands"
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
      label: <OptionWithImage />,
      value: 'perksy-questions'
    }
  ]}
/>;
```

#### MultiSelect:

```jsx
const Dropdown = require('./index').default;

<Dropdown.MultiSelect
  label="Target Consumer Base"
  options={[
    {
      label: 'Canada',
      value: 'canada'
    },
    {
      label: 'United States',
      value: 'usa'
    }
  ]}
/>;
```
