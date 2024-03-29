import React, { PureComponent } from "react";
import cx from "classnames";
import Icon from "../../Icon";

export class ImageLoader extends PureComponent {
  static defaultProps = {
    loadTransition: false,
    preLoadedStyles: {},
    onLoad: () => {},
    onError: () => {},
  };

  image: any;

  state = {
    imageHasLoaded: false,
    showImage: false,
    imageHasErrored: false,
  };

  showImage = () => setTimeout(() => this.setState({ showImage: true }), 200);

  handleOnLoad = () => {
    // @ts-expect-error TS(2339): Property 'onLoad' does not exist on type 'Readonly... Remove this comment to see the full error message
    this.props.onLoad();
    this.setState({ imageHasLoaded: true }, this.showImage);
  };

  handleOnError = () => {
    // @ts-expect-error TS(2339): Property 'onError' does not exist on type 'Readonl... Remove this comment to see the full error message
    this.props.onError();
    this.setState({ imageHasErrored: true });
  };

  render() {
    // @ts-expect-error TS(2339): Property 'alt' does not exist on type 'Readonly<{}... Remove this comment to see the full error message
    const { alt, src, loadTransition, preLoadedStyles, ...rest } = this.props;
    const { imageHasLoaded, imageHasErrored, showImage } = this.state;

    const classNames = cx("gui-image-loader", {
      "gui-image-loader--loaded": imageHasLoaded,
      "gui-image-loader--errored": imageHasErrored,
      "gui-image-loader--show": showImage,
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
        height: `${this.image.height}px`,
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
          ref={(image) => {
            this.image = image;
          }}
        />

        {!showImage && !imageHasErrored && (
          <Icon name="loader" title="Loading" />
        )}

        {imageHasErrored && (
          <Icon name="cross" text="Oops, this image seems to be missing." />
        )}
      </div>
    );
  }
}

export default ImageLoader;
