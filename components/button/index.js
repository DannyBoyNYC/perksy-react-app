import React from 'react';

import Button from './Button';

/**
 * Button Variations.
 */
const Primary = props => <Button {...props} variation="primary" />;
const Info = props => <Button {...props} variation="info" />;
const Success = props => <Button {...props} variation="success" />;
const Warning = props => <Button {...props} variation="warning" />;
const Danger = props => <Button {...props} variation="danger" />;

export default { Primary, Info, Success, Warning, Danger };
