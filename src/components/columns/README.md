### Variations

#### Columns.Even

```jsx
const Columns = require('./index').default;

const Child = () => (
  <div
    style={{
      background: 'white',
      border: '1px solid darkgrey',
      height: '30px'
    }}
  />
);

<React.Fragment>
  <Columns.Even>
    <Child />
  </Columns.Even>

  <Columns.Even>
    <Child />
    <Child />
  </Columns.Even>

  <Columns.Even>
    <Child />
    <Child />
    <Child />
  </Columns.Even>

  <Columns.Even>
    <Child />
    <Child />
    <Child />
    <Child />
  </Columns.Even>
</React.Fragment>;
```

#### Columns.OneSpanTwo

```jsx
const Columns = require('./index').default;

const Child = () => (
  <div
    style={{
      background: 'white',
      border: '1px solid darkgrey',
      height: '30px'
    }}
  />
);

<Columns.OneSpanTwo>
  <Child />
  <Child />
</Columns.OneSpanTwo>;
```

#### Columns.SpanTwoOne

```jsx
const Columns = require('./index').default;

const Child = () => (
  <div
    style={{
      background: 'white',
      border: '1px solid darkgrey',
      height: '30px'
    }}
  />
);

<Columns.SpanTwoOne>
  <Child />
  <Child />
</Columns.SpanTwoOne>;
```

#### Columns.SpanThreeSpanTwo

```jsx
const Columns = require('./index').default;

const Child = () => (
  <div
    style={{
      background: 'white',
      border: '1px solid darkgrey',
      height: '30px'
    }}
  />
);

<Columns.SpanThreeSpanTwo>
  <Child />
  <Child />
</Columns.SpanThreeSpanTwo>;
```
