import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const FileCardPreview = ({
  label,
  previewSrc,
  fileExtension,
  progress,
  showPreview
}) => {
  const loadingText = progress === 100 ? 'Processing' : 'Uploading';

  if (!previewSrc) {
    return <div className="figure__title">{fileExtension}</div>;
  }

  const previewBeingProcessed = previewSrc && progress;
  if (previewBeingProcessed) {
    return (
      <div className="figure__title">
        <div className="figure__loader-wrapper">
          <Icon name="loader" className="figure__loader" />
          <span className="figure__progress">{progress}%</span>
        </div>

        <div className="figure__loader-text">{loadingText}</div>
      </div>
    );
  }

  const loadingPreview = previewSrc && !progress && !showPreview;
  if (loadingPreview) {
    return (
      <div className="figure__title">
        <Icon name="loader" className="figure__loader" />
      </div>
    );
  }
  // TODO: Add alt-text prop
  return (
    <img
      title={label}
      src={previewSrc}
      alt={label}
      className="figure__thumbnail"
    />
  );
};

FileCardPreview.propTypes = {
  previewSrc: PropTypes.string,
  label: PropTypes.string.isRequired,
  fileExtension: PropTypes.string.isRequired,
  progress: PropTypes.number,
  showPreview: PropTypes.bool
};

FileCardPreview.defaultProps = {
  previewSrc: '',
  progress: 0,
  showPreview: false
};

export default FileCardPreview;
