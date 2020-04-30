import React from 'react';

import Dropdown from './Dropdown';

/**
 * Dropdown Variations.
 */
const SingleSelect = props => <Dropdown {...props} variation="single-select" />;
const MultiSelect = props => (
  <Dropdown {...props} variation="multi-select" isMulti />
);

export default { SingleSelect, MultiSelect };
