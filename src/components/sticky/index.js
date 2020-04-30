import React from 'react';

import Sticky from './Sticky';

/**
 * Sticky Variations.
 */
const Bottom = props => <Sticky {...props} variation="bottom" />;
const Top = props => <Sticky {...props} variation="top" />;

export default { Bottom, Top };
