import React from 'react';

import Input from './Input';

/**
 * Input Variations.
 */
const Checkbox = props => <Input {...props} variation="checkbox" />;
const Email = props => <Input {...props} variation="email" />;
const File = props => <Input {...props} variation="file" />;
const Hidden = props => <Input {...props} variation="hidden" />;
const Number = props => <Input {...props} variation="number" />;
const Password = props => <Input {...props} variation="password" />;
const Radio = props => <Input {...props} variation="radio" />;
const Switch = props => <Input {...props} variation="switch" />;
const Tel = props => <Input {...props} variation="tel" />;
const Text = props => <Input {...props} variation="text" />;
const Textarea = props => <Input {...props} variation="textarea" />;

export default {
  Checkbox,
  Email,
  File,
  Hidden,
  Number,
  Password,
  Radio,
  Switch,
  Tel,
  Text,
  Textarea
};
