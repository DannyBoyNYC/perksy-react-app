### Variations

#### Input.Checkbox

```jsx
const Input = require('./index').default;

<React.Fragment>
  <Input.Checkbox id="enabled" label="Checked" isChecked />
  <Input.Checkbox id="enabled" label="Unchecked" />
  <Input.Checkbox
    id="enabled"
    label="Checked and disabled"
    isChecked
    isDisabled
  />
  <Input.Checkbox id="enabled" label="Disabled" isDisabled />
</React.Fragment>;
```

#### Input.Email

```jsx
const Input = require('./index').default;

<Input.Email id="user-email" label="Your email address" isRequired />;
```

#### Input.File

```jsx
const Input = require('./index').default;

<Input.File id="image-upload" label="Select an image to upload" />;
```

#### Input.Hidden

```jsx
const Input = require('./index').default;

<Input.Hidden id="stack-code" label="Select a stack code" value="12345" />;
```

#### Input.Number

```jsx
const Input = require('./index').default;

<Input.Number id="max-respondents" label="Maximum number of respondents" />;
```

#### Input.Password

```jsx
const Input = require('./index').default;

<Input.Password id="user-password" label="Your password" />;
```

#### Input.Radio

```jsx
const Input = require('./index').default;

<React.Fragment>
  <Input.Radio id="fruit" label="Apples" value="apple" isChecked />
  <Input.Radio id="fruit" label="Oranges" value="orange" />
  <Input.Radio
    id="fruit-opt"
    label="Bananas"
    value="banana"
    isChecked
    isDisabled
  />
  <Input.Radio id="fruit-opt" label="Grapes" value="grape" isDisabled />
</React.Fragment>;
```

#### Input.Switch

```jsx
const Input = require('./index').default;

<React.Fragment>
  <Input.Switch id="enabled" label="Checked" isChecked />
  <Input.Switch id="enabled" label="Unchecked" />
  <Input.Switch
    id="enabled"
    label="Checked and disabled"
    isChecked
    isDisabled
  />
  <Input.Switch id="enabled" label="Disabled" isDisabled />
</React.Fragment>;
```

#### Input.Tel

```jsx
const Input = require('./index').default;

<Input.Tel
  id="user-number"
  label="Your telephone number"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
/>;
```

#### Input.Text

```jsx
const Input = require('./index').default;

<React.Fragment>
  <Input.Text id="campaign-name" label="Enter the name of your campaign" />
  <Input.Text
    id="campaign-category"
    label="Enter the category of your campaign"
    value="This is disabled"
    isDisabled
  />
</React.Fragment>;
```

#### Input.Textarea

```jsx
const Input = require('./index').default;

<Input.Textarea
  id="campaign-objective"
  label="Campaign Objectives"
  placeholder="e.g. To explore millennial consumer attitudes and behaviors."
/>;
```
