import React from 'react';

import Status from './Status';

/**
 * Status Variations.
 */
const Button = props => <Status {...props} variation="button" />;
const Title = props => <Status {...props} variation="title" />;

export default { Button, Title };
