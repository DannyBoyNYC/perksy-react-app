import React from 'react';

import Logo from './Logo';

/**
 * Logo Variations.
 */
const Black = props => <Logo {...props} variation="black" />;
const White = props => <Logo {...props} variation="white" />;

export default { Black, White };
