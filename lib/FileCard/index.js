import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class FileCard extends Component {
  static propTypes = {
    previewSrc: PropTypes.string,
    isHighlighted: PropTypes.bool,
    filename: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string
  };

  static defaultProps = {
    previewSrc: '',
    filename: '',
    label: '',
    className: '',
    active: false,
    isHighlighted: false,
    disabled: false,
    children: []
  };

  static getFileExtension(filename) {
    return filename.substr(filename.lastIndexOf('.') + 1);
  }

  render() {
    const {
      filename,
      previewSrc,
      isHighlighted,
      label,
      children,
      active,
      className,
      disabled
    } = this.props;
    const classes = cx(`file-card ${className}`, {
      'file-card--highlighted': isHighlighted,
      'file-card--active': active,
      'file-card--disabled': disabled
    });

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          {previewSrc && (
            <div
              title={label}
              style={{ backgroundImage: `url(${previewSrc})` }}
              className="file-card__thumbnail"
            />
          )}

          {!previewSrc && (
            <div className="file-card__title">
              {FileCard.getFileExtension(filename)}
            </div>
          )}

          <div className="file-card__label">{label}</div>

          <div className="file-card__actions">
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                className: 'file-card__action'
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FileCard;
