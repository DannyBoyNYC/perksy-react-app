import React from 'react';

import Navigation from './Navigation';

/**
 * Navigation Variations.
 */
const Horizontal = props => <Navigation variation="horizontal" {...props} />;
const Vertical = props => <Navigation variation="vertical" {...props} />;

export default { Horizontal, Vertical };
