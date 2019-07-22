import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../Icon';

class ImageLoader extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    loadTransition: PropTypes.bool,
    preLoadedStyles: PropTypes.shape(),
    onLoad: PropTypes.func,
    onError: PropTypes.func
  };

  static defaultProps = {
    loadTransition: false,
    preLoadedStyles: {},
    onLoad: () => {},
    onError: () => {}
  };

  state = {
    imageHasLoaded: false,
    showImage: false,
    imageHasErrored: false
  };

  showImage = () => setTimeout(() => this.setState({ showImage: true }), 200);

  handleOnLoad = () => {
    this.props.onLoad();
    this.setState({ imageHasLoaded: true }, this.showImage);
  };

  handleOnError = () => {
    this.props.onError();
    this.setState({ imageHasErrored: true });
  };

  render() {
    const { alt, src, loadTransition, preLoadedStyles, ...rest } = this.props;
    const { imageHasLoaded, imageHasErrored, showImage } = this.state;

    const classNames = cx('image-loader', {
      'image-loader--loaded': imageHasLoaded,
      'image-loader--errored': imageHasErrored,
      'image-loader--show': showImage
    });

    let style;

    const usePreloadDimensionsAsFallback = !imageHasLoaded || imageHasErrored;
    if (usePreloadDimensionsAsFallback) {
      style = preLoadedStyles;
    }

    const imageHasLoadedAndTransitionRequired =
      imageHasLoaded && !showImage && loadTransition;
    if (imageHasLoadedAndTransitionRequired) {
      style = {
        width: `${this.image.width}px`,
        height: `${this.image.height}px`
      };
    }

    return (
      <div className={classNames} style={style}>
        <img
          {...rest}
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
