### States

#### Disabled

```jsx
const Button = require('./index').default;

<Button.Primary isDisabled={true}>Can't touch this</Button.Primary>;
```

### Variations

```jsx
const Button = require('./index').default;

<React.Fragment>
  <Button.Primary>Primary</Button.Primary>
  <Button.Info>Info</Button.Info>
  <Button.Success>Success</Button.Success>
  <Button.Warning>Warning</Button.Warning>
  <Button.Danger>Danger</Button.Danger>
</React.Fragment>;
```
