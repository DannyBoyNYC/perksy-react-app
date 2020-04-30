import React from 'react';

import List from './List';

/**
 * List Variations.
 */
const Ordered = props => <List {...props} variation="ordered" />;
const Unordered = props => <List {...props} variation="unordered" />;

export default { Ordered, Unordered };
