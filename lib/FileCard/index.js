import React from 'react';

const FileCard = (props) => {
  return (
    <div className="file-card">
      <div className="file-card__actions">{props.actions}</div>
      <div className="file-card__file">{props.file}</div>
      <div className="file-card__label">{props.label}</div>
    </div>
  );
};

export default FileCard;
