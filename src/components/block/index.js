import React from 'react';

import Block from './Block';

/**
 * Block Variations.
 */
const CampaignPercentage = props => (
  <Block {...props} variation="campaign-percentage" />
);
const CampaignRow = props => <Block {...props} variation="campaign-row" />;

export default { CampaignPercentage, CampaignRow };
