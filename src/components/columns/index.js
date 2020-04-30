import React from 'react';

import Columns from './Columns';

/**
 * Columns Variations.
 */
const Even = props => <Columns {...props} variation="even" />;
const OneSpanTwo = props => <Columns {...props} variation="one-span-two" />;
const SpanTwoOne = props => <Columns {...props} variation="span-two-one" />;
const SpanThreeSpanTwo = props => (
  <Columns {...props} variation="span-three-span-two" />
);

export default { Even, OneSpanTwo, SpanTwoOne, SpanThreeSpanTwo };
