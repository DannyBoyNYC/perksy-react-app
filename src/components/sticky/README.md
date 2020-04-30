**Note:** This component is not supported in IE. See [Can I Use](https://caniuse.com/#feat=css-sticky) for current browser support.

### Variations

#### Sticky.Bottom

```jsx
const Sticky = require('./index').default;

<div style={{ height: '200px' }}>
  <div style={{ height: '140px' }} />
  <Sticky.Bottom>
    <div
      style={{
        background: 'white',
        border: '1px solid darkgrey',
        padding: '20px'
      }}
    >
      You must scroll past this element to see it stick.
    </div>
  </Sticky.Bottom>
</div>;
```

#### Sticky.Top

```jsx
const Sticky = require('./index').default;

<div style={{ height: '200px' }}>
  <Sticky.Top>
    <div
      style={{
        background: 'white',
        border: '1px solid darkgrey',
        padding: '20px'
      }}
    >
      You must scroll past this element to see it stick.
    </div>
  </Sticky.Top>
</div>;
```
