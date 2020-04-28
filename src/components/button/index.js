import React from 'react';

import Button from './Button';

/**
 * Button Variations.
 */
const Primary = props => <Button variation="primary" {...props} />;
const Info = props => <Button variation="info" {...props} />;
const Success = props => <Button variation="success" {...props} />;
const Warning = props => <Button variation="warning" {...props} />;
const Danger = props => <Button variation="danger" {...props} />;

export default { Primary, Info, Success, Warning, Danger };
