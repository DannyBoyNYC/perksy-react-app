### Variations

#### Campaign.Card

```jsx
const Campaign = require('./index').default;

<Campaign.Card
  image={{
    altText: 'A student showing of his good grade',
    height: 146,
    src: 'https://media1.giphy.com/media/LNVS7w1fxlCvu/giphy.gif'
  }}
  name="ACT Prep"
  respondents={{
    current: 520,
    maximum: 1000
  }}
/>;
```

#### Campaign.Percentage

```jsx
const Campaign = require('./index').default;

<Campaign.Percentage
  name="College Athletes"
  respondents={{
    current: 2923,
    maximum: 20000
  }}
/>;
```

#### Campaign.Progress

```jsx
const Campaign = require('./index').default;

<Campaign.Progress
  name="College Athletes"
  respondents={{
    current: 2923,
    maximum: 20000
  }}
/>;
```

#### Campaign.Row

```jsx
const Campaign = require('./index').default;

<Campaign.Row
  image={{
    altText: 'A student showing of his good grade',
    height: 60,
    src: 'https://media1.giphy.com/media/LNVS7w1fxlCvu/giphy.gif'
  }}
  name="ACT Prep"
  respondents={{
    current: 2923,
    maximum: 20000
  }}
/>;
```
