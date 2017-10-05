import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class FileCard extends Component {
  static propTypes = {
    previewSrc: PropTypes.string,
    isHighlighted: PropTypes.bool,
    filename: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  };

  static defaultProps = {
    previewSrc: '',
    filename: '',
    label: '',
    isHighlighted: false,
    children: []
  };

  static getFileExtension(filename) {
    return filename.substr(filename.lastIndexOf('.') + 1);
  }

  constructor() {
    super();

    this.state = {
      disabled: false,
      imageCheckCounter: 0,
      imageLoaded: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageLoaded() {
    clearTimeout(this.timer);
    this.setState({
      imageLoaded: true
    });
  }

  handleImageError() {
    if (this.state.imageCheckCounter === 5) {
      return;
    }

    this.timer = setTimeout(() => {
      this.setState({ imageCheckCounter: this.state.imageCheckCounter + 1 });
    }, 5000);
  }

  backgroundImage() {
    if (this.state.imageLoaded) {
      return (
        <div
          title={this.props.label}
          style={{
            backgroundImage: `url(${this.props
              .previewSrc}?rand=${Math.random() * 0.1})`
          }}
          className="file-card__thumbnail"
        />
      );
    }

    return this.fileTitle();
  }

  fileTitle() {
    return (
      <div className="file-card__title">
        {FileCard.getFileExtension(this.props.filename)}
      </div>
    );
  }

  render() {
    const { previewSrc, isHighlighted, label, children } = this.props;
    const classes = cx('file-card', {
      'file-card--highlighted': isHighlighted
    });

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          <div className="file-card__label">{label}</div>

          {previewSrc && this.backgroundImage()}

          {!previewSrc && this.fileTitle()}

          <div className="file-card__actions">
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                className: 'file-card__action'
              })
            )}
          </div>
        </div>
        {previewSrc &&
          !this.state.imageLoaded && (
            <img
              src={`${previewSrc}?rand=${Math.random() * 0.1}`}
              alt={'check'}
              onLoad={this.handleImageLoaded}
              onError={this.handleImageError}
              className="file-card__loader"
            />
          )}
      </div>
    );
  }
}

export default FileCard;
