import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FileCardPreview from './FileCardPreview';

class FileCard extends Component {
  static propTypes = {
    previewSrc: PropTypes.string,
    isHighlighted: PropTypes.bool,
    filename: PropTypes.string,
    label: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    added: PropTypes.bool,
    removed: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    loadingProgress: PropTypes.number,
    showPreview: PropTypes.bool
  };

  static defaultProps = {
    previewSrc: '',
    filename: '',
    label: '',
    className: '',
    active: false,
    isHighlighted: false,
    added: false,
    removed: false,
    disabled: false,
    children: [],
    loadingProgress: null,
    showPreview: false
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
      disabled,
      removed,
      added,
      loadingProgress,
      showPreview
    } = this.props;

    const classes = cx(`file-card ${className}`, {
      'file-card--highlighted': isHighlighted,
      'file-card--active': active,
      'file-card--disabled': disabled,
      'file-card--removed': removed,
      'file-card--added': added,
      'file-card--loading': loadingProgress,
      'file-card--processing': loadingProgress === 100
    });

    const fileExtension = FileCard.getFileExtension(filename);

    return (
      <div className={classes}>
        <div className="file-card__wrapper">
          <FileCardPreview
            label={label}
            previewSrc={previewSrc}
            progress={loadingProgress}
            fileExtension={fileExtension}
            showPreview={showPreview}
          />
          {label && (
            <div className="file-card__label" title={label}>
              {label}
            </div>
          )}
          <div className="file-card__actions">
            {React.Children.map(children, child =>
              child
                ? React.cloneElement(child, {
                    className: 'file-card__action'
                  })
                : null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FileCard;
