import React from 'react';
import { arrayOf, bool, func, string, shape } from 'prop-types';
import CommentForm from './CommentForm';

export function ConversationFooter({
  id,
  addComment,
  user,
  onCancel,
  onCommentChange,
  focusOnMount,
  placeholder,
  onRowCountChange,
  users
}) {
  return (
    <div className="conversation__foot">
      <CommentForm
        id={id}
        onSubmit={addComment}
        author={user}
        onCancel={onCancel}
        onCommentChange={onCommentChange}
        focusOnMount={focusOnMount}
        placeholder={placeholder}
        onRowCountChange={onRowCountChange}
        users={users}
      />
    </div>
  );
}

ConversationFooter.propTypes = {
  id: string,
  addComment: func,
  user: shape({
    avatar: string,
    name: string,
    initials: string
  }),
  onCancel: func,
  onCommentChange: func,
  focusOnMount: bool,
  placeholder: string,
  onRowCountChange: func,
  users: arrayOf(shape({}))
};

ConversationFooter.defaultProps = {
  id: '',
  addComment: () => {},
  user: {},
  onCancel: () => {},
  onCommentChange: () => {},
  focusOnMount: false,
  placeholder: '',
  onRowCountChange: () => {},
  users: []
};
