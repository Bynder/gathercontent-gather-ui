import React from 'react';
import cx from 'classnames';

const FileCard = (props) => {
  const url = `url(${props.image})`;
  const classes = cx({
    'file-card': true,
    'has-comments': props.hasComments,
  });


  return (
    <div className={classes}>
      <div style={{ backgroundImage: url }} className="file-card__thumbnail"></div>
      <div className="file-card__actions">{props.actions}
        <div className="file-card__action file-card__action--delete"></div>
        <div className="file-card__action file-card__action--delete"></div>
        <div className="file-card__action file-card__action--delete"></div>
      </div>
      <div className="file-card__file">{props.file}</div>
      <div className="file-card__label">{props.filename}</div>
    </div>
  );
};

export default FileCard;
