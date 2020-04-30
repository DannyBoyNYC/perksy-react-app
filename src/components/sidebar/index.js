import React from 'react';

import Sidebar from './Sidebar';

/**
 * Sidebar Variations.
 */
const Collapsible = props => <Sidebar {...props} variation="collapsible" />;
const Static = props => <Sidebar {...props} variation="static" />;

export default { Collapsible, Static };
