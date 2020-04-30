import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

/**
 * Renders an Image.
 */
const Image = ({
  altText,
  classes,
  className,
  height,
  src,
  width,
  variation
}) => (
  <LazyLoad
    height={height}
    offset={100}
    className={classnames(classes.root, classes[variation], className)}
  >
    <img
      className={classes.image}
      alt={altText}
      height={height}
      src={src}
      width={width}
    />
  </LazyLoad>
);

Image.propTypes = {
  /** Alternative text to add to image */
  altText: PropTypes.string.isRequired,
  /** JSS object to pull styles from */
  classes: PropTypes.object.isRequired,
  /** Additional class styles to add */
  className: PropTypes.string,
  /** Height in pixels of the image */
  height: PropTypes.number.isRequired,
  /** Image source to render */
  src: PropTypes.string.isRequired,
  /** Width in pixels of the image */
  width: PropTypes.number,
  /** Type of Image to render */
  variation: PropTypes.oneOf(['lazy']).isRequired
};

export default injectSheet(styles)(Image);
