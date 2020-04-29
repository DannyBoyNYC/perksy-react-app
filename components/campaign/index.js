import React from 'react';

import Campaign from './Campaign';

/**
 * Campaign Variations.
 */
const Card = props => <Campaign {...props} variation="card" />;
const Progress = props => <Campaign {...props} variation="progress" />;

export default { Card, Progress };
