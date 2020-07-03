import React, { useContext } from 'react';
import { Comment, Person } from 'lib';
import { mockUserNoAvatar, mockUsers } from './mockData';

// eslint-disable-next-line react/prop-types
function ExistingCommentExample({ comment, submitPromise, isFirst }) {
  const { isEditing, isOpen } = useContext(Comment.Context);

  return (
    <Comment>
      <Comment.Header actions={<Comment.Actions />}>
        <Person
          person={comment.author}
          meta={<Comment.Meta>{comment.createdAt}</Comment.Meta>}
        />
      </Comment.Header>

      <Comment.Body>
        {!isEditing && (
          <Comment.Text
            users={mockUsers}
            showFullText={isOpen}
            currentUser={mockUserNoAvatar}
            hasBeenEdited
          >
            {comment.body}
          </Comment.Text>
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
        onConfirm={() => {}}
      />
    </Comment>
  );
}

export { ExistingCommentExample };
