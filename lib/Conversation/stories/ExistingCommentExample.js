import React, { useContext } from 'react';
import { Comment, Person } from 'lib';
import { mockUsers } from './mockData';

// eslint-disable-next-line react/prop-types
function ExistingCommentExample({ comment, submitPromise, isFirst }) {
  const { isEditing, isOpen } = useContext(Comment.Context);

  return (
    <Comment isOpen={isOpen}>
      <Comment.Header actions={<Comment.Actions />}>
        <Person
          person={comment.author}
          meta={<Comment.Meta>{comment.createdAt}</Comment.Meta>}
        />
      </Comment.Header>

      <Comment.Body>
        {!isEditing && (
          <Comment.Text users={mockUsers}>{comment.body}</Comment.Text>
        )}
        {isEditing && (
          <Comment.Form
            onSubmit={submitPromise}
            placeholder="Reply..."
            submitText="Save"
            users={mockUsers}
            autoFocusInput
          >
            {comment.body}
          </Comment.Form>
        )}
      </Comment.Body>

      <Comment.DeleteConfirmation
        confirmButtonText={isFirst ? 'Delete conversation' : 'Delete comment'}
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    </Comment>
  );
}

export { ExistingCommentExample };
