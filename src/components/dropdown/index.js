import React from 'react';

import Dropdown from './Dropdown';

/**
 * Dropdown Variations.
 */
const SingleSelect = props => (
  <Dropdown {...props} variation="single-select" isMultiple={false} />
);
const MultiSelect = props => (
  <Dropdown {...props} variation="multi-select" isMultiple />
);

export default { SingleSelect, MultiSelect };
