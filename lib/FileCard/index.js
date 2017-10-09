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

  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      imageCheckCounter: 0,
      imageHasLoaded: false,
      backgroundImage: props.previewSrc
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageLoaded() {
    clearTimeout(this.timer);
    this.setState({
      imageHasLoaded: true
    });
  }

  handleImageError() {
    if (this.state.imageCheckCounter >= 5) {
      return;
    }

    this.setState({
      backgroundImage: `${this.props.previewSrc}?rand=${Math.random() * 0.1}`
    });

    this.timer = setTimeout(() => {
      this.setState({ imageCheckCounter: this.state.imageCheckCounter + 1 });
    }, 5000);
  }

  fileThumbnail() {
    if (this.state.imageHasLoaded) {
      return (
        <div
          title={this.props.label}
          style={{
            backgroundImage: `url(${this.state.backgroundImage})`
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

          {this.state.imageHasLoaded && this.fileThumbnail()}

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
          !this.state.imageHasLoaded && (
            <img
              src={this.state.backgroundImage}
              alt={label}
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
