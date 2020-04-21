import React from 'react';
import { func } from 'prop-types';
import Button from '../Button';

export function CommentActions({ onEditClick, onRemoveClick }) {
  return (
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
  );
}

CommentActions.propTypes = {
  onEditClick: func,
  onRemoveClick: func
};

CommentActions.defaultProps = {
  onEditClick: () => {},
  onRemoveClick: () => {}
};
