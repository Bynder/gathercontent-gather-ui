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
    return <div className="file-card__title">{fileExtension}</div>;
  }

  const previewBeingProcessed = previewSrc && progress;
  if (previewBeingProcessed) {
    return (
      <div className="file-card__title">
        <div className="file-card__loader-wrapper">
          <Icon name="loader" className="file-card__loader" />
          <span className="file-card__progress">{progress}%</span>
        </div>

        <div className="file-card__loader-text">{loadingText}</div>
      </div>
    );
  }

  const loadingPreview = previewSrc && !progress && !showPreview;
  if (loadingPreview) {
    return (
      <div className="file-card__title">
        <Icon name="loader" className="file-card__loader" />
      </div>
    );
  }

  return (
    <div
      title={label}
      style={{ backgroundImage: `url(${previewSrc})` }}
      className="file-card__thumbnail"
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
