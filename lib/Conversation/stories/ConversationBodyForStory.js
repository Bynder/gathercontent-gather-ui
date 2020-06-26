import React from 'react';
import { Comment, Conversation, Person } from 'lib';
import { mockComments, mockUsers } from './mockData';
import { createDelayedPromise } from '../../../stories/helpers/createDelayedPromise';

// eslint-disable-next-line react/prop-types
function ConversationBodyForStory({ isOpen, commentHasFailedToSave }) {
  const numberOfRepliesInbetween = mockComments.length - 2;
  const commentsToMap = !isOpen
    ? [mockComments[0], mockComments[mockComments.length - 1]]
    : mockComments;

  const comments = commentsToMap.map((c, index) => (
    <div key={c.id}>
      <Comment isOpen={isOpen}>
        <Comment.Header actions={<Comment.Actions />}>
          <Person
            person={c.author}
            meta={<Comment.Meta>{c.createdAt}</Comment.Meta>}
          />
        </Comment.Header>

        <Comment.Body>
          <Comment.Text users={mockUsers}>{c.body}</Comment.Text>
          <Comment.EditForm onSubmit={createDelayedPromise} users={mockUsers}>
            {c.body}
          </Comment.EditForm>
        </Comment.Body>

        <Comment.DeleteConfirmation
          confirmButtonText={
            index === 0 ? 'Delete conversation' : 'Delete comment'
          }
          onCancel={() => {}}
          onConfirm={() => {}}
        />

        {commentHasFailedToSave && <Comment.Failed />}
      </Comment>

      {!isOpen && index === 0 && mockComments.length > 1 && (
        <Comment.ReplyCount count={numberOfRepliesInbetween} />
      )}
    </div>
  ));

  return <Conversation.Body>{comments}</Conversation.Body>;
}

export { ConversationBodyForStory };
