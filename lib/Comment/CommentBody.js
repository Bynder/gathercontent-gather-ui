import React, { Fragment } from 'react';
import { arrayOf, bool, func, node, shape } from 'prop-types';
import Linkify from 'linkifyjs/react';
import CommentForm from '../Conversation/CommentForm';
import Person from '../Person';

export function CommentBody({
  children,
  isEditing,
  comment,
  users,
  onEditChange,
  onEditCancel,
  onEditSubmit
}) {
  return (
    <Fragment>
      <Person person={comment.author} className="conversation" />
      <div className="conversation__comment-body">
        {!isEditing && (
          <p className="conversation__text">
            <Linkify>{comment.body}</Linkify>
          </p>
        )}
        {isEditing && (
          <CommentForm
            id={comment.id}
            onCommentChange={onEditChange}
            onCancel={onEditCancel}
            users={users}
            author={comment.author}
            onRowCountChange={() => {}}
            onSubmit={onEditSubmit}
            value={comment.body}
            placeholder=""
            focusOnMount
            editing
            showAuthor={false}
          />
        )}
        {children}
      </div>
      <input
        type="text"
        className="conversation__focus-fallback"
        aria-hidden="true"
      />
    </Fragment>
  );
}

CommentBody.propTypes = {
  children: node,
  isEditing: bool,
  comment: shape({}),
  users: arrayOf(shape({})),
  onEditChange: func,
  onEditCancel: func,
  onEditSubmit: func
};

CommentBody.defaultProps = {
  children: <Fragment />,
  isEditing: false,
  comment: {},
  users: [],
  onEditChange: () => {},
  onEditCancel: () => {},
  onEditSubmit: () => {}
};
