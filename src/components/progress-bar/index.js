import React from 'react';

import ProgressBar from './ProgressBar';

/**
 * ProgressBar Variations.
 */
const Basic = props => <ProgressBar {...props} variation="basic" />;
const Percentage = props => <ProgressBar {...props} variation="percentage" />;

export default { Basic, Percentage };
