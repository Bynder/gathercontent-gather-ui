import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../..';

class ImageLoader extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    setLoadedDimensions: PropTypes.bool,
    preLoadStyles: PropTypes.shape(),
    onLoad: PropTypes.func,
    onError: PropTypes.func
  };

  static defaultProps = {
    setLoadedDimensions: false,
    preLoadStyles: {},
    onLoad: () => {},
    onError: () => {}
  };

  state = {
    imageHasLoaded: false,
    showImage: false,
    imageHasErrored: false
  };

  showImage = () =>
    window.requestAnimationFrame(this.setState({ showImage: true }));

  handleOnLoad = () => {
    this.props.onLoad();
    this.setState({ imageHasLoaded: true }, this.showImage);
  };

  handleOnError = () => {
    this.props.onError();
    this.setState({ imageHasErrored: true });
  };

  render() {
    const {
      alt,
      src,
      setLoadedDimensions,
      preLoadStyles,
      ...rest
    } = this.props;
    const { imageHasLoaded, imageHasErrored, showImage } = this.state;

    const classNames = cx('image-loader', {
      'image-loader--loaded': imageHasLoaded,
      'image-loader--errored': imageHasErrored,
      'image-loader--show': showImage
    });

    const loadedStyles =
      imageHasLoaded && setLoadedDimensions
        ? {
            width: this.image.width,
            height: this.image.height
          }
        : {};

    const containerStyles = !showImage
      ? {
          ...loadedStyles
        }
      : {};

    const imageStyles = !showImage || imageHasErrored ? preLoadStyles : {};

    return (
      <div className={classNames} style={containerStyles}>
        <img
          {...rest}
          style={imageStyles}
          onLoad={this.handleOnLoad}
          onError={this.handleOnError}
          alt={alt}
          src={src}
          ref={image => {
            this.image = image;
          }}
        />

        {!showImage && !imageHasErrored && <Icon name="loader" />}

        {imageHasErrored && (
          <Icon name="cross" text="Oops, this image seems to be missing." />
        )}
      </div>
    );
  }
}

export default ImageLoader;
