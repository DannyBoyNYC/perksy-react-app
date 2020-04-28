import React from 'react';

import Navigation from './Navigation';

/**
 * Navigation Variations.
 */
const Horizontal = props => <Navigation {...props} variation="horizontal" />;
const Vertical = props => <Navigation {...props} variation="vertical" />;

export default { Horizontal, Vertical };
