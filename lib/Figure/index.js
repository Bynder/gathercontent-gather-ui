import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FigurePreview from './FigurePreview';

class Figure extends Component {
  static propTypes = {
    previewSrc: PropTypes.string,
    isHighlighted: PropTypes.bool,
    filename: PropTypes.string,
    caption: PropTypes.string,
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
    showPreview: PropTypes.bool,
    alignActionsRight: PropTypes.bool,
    altText: PropTypes.string
  };

  static defaultProps = {
    previewSrc: '',
    filename: '',
    caption: '',
    className: '',
    active: false,
    isHighlighted: false,
    added: false,
    removed: false,
    disabled: false,
    children: [],
    loadingProgress: null,
    showPreview: false,
    alignActionsRight: false,
    altText: ''
  };

  static getFileExtension(filename) {
    return filename.substr(filename.lastIndexOf('.') + 1);
  }

  render() {
    const {
      filename,
      previewSrc,
      isHighlighted,
      caption,
      children,
      active,
      className,
      disabled,
      removed,
      added,
      loadingProgress,
      showPreview,
      alignActionsRight,
      altText
    } = this.props;

    const classes = cx(`figure ${className}`, {
      'figure--highlighted': isHighlighted,
      'figure--active': active,
      'figure--disabled': disabled,
      'figure--removed': removed,
      'figure--added': added,
      'figure--loading': loadingProgress,
      'figure--processing': loadingProgress === 100
    });

    const actionsClasses = cx('figure__actions', {
      'figure__actions--right': alignActionsRight
    });

    const fileExtension = Figure.getFileExtension(filename);

    return (
      <div className={classes}>
        <figure className="figure__wrapper">
          <FigurePreview
            caption={caption}
            previewSrc={previewSrc}
            progress={loadingProgress}
            fileExtension={fileExtension}
            showPreview={showPreview}
            altText={altText}
          />
          {caption && (
            <figcaption className="figure__caption" title={caption}>
              {caption}
            </figcaption>
          )}
          <div className={actionsClasses}>
            {React.Children.map(children, child =>
              child
                ? React.cloneElement(child, {
                    className: 'figure__action'
                  })
                : null
            )}
          </div>
        </figure>
      </div>
    );
  }
}

export default Figure;
