import React from 'react';
import { func, string } from 'prop-types';
import Button from '../Button';

export function CommentMeta({ createdAt, onEditClick, onRemoveClick }) {
  return (
    <div className="conversation__meta-wrapper">
      <span className="conversation__meta conversation__date-text">
        {createdAt}
      </span>
      <span className="conversation__actions">
        <Button
          className="conversation__meta conversation__edit-link"
          types={['link', 'link-default', 'collapse']}
          clickHandler={onEditClick}
        >
          Edit
        </Button>
        <Button
          className="conversation__meta"
          types={['link', 'link-danger', 'collapse']}
          clickHandler={onRemoveClick}
        >
          Delete
        </Button>
      </span>
    </div>
  );
}

CommentMeta.propTypes = {
  createdAt: string,
  onEditClick: func,
  onRemoveClick: func
};

CommentMeta.defaultProps = {
  createdAt: '',
  onEditClick: () => {},
  onRemoveClick: () => {}
};
