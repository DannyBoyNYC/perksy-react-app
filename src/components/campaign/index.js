import React from 'react';

import Campaign from './Campaign';

/**
 * Campaign Variations.
 */
const Card = props => <Campaign {...props} variation="card" />;
const Percentage = props => <Campaign {...props} variation="percentage" />;
const Progress = props => <Campaign {...props} variation="progress" />;
const Row = props => <Campaign {...props} variation="row" />;

export default { Card, Percentage, Progress, Row };
