import React from 'react';
import { Comment, Conversation } from 'lib';
import { mockComments, mockUsers } from './mockData';

function ConversationBodyForStory({ isActive }) {
  const firstComment = mockComments[0];
  const lastComment = mockComments[mockComments.length - 1];
  const numberOfRepliesInbetween = mockComments.length - 2;

  return (
    <Conversation.Body>
      <Comment showLine className="pt-2" isActive={isActive}>
        <Comment.Body
          isActive={isActive}
          isEditing={false}
          comment={firstComment}
          users={mockUsers}
        />
      </Comment>
      {!isActive && <Comment.ReplyCount count={numberOfRepliesInbetween} />}
      <Comment isActive={isActive}>
        <Comment.Body
          isActive={isActive}
          isEditing={false}
          comment={lastComment}
          users={mockUsers}
        />
      </Comment>
    </Conversation.Body>
  );
}

export { ConversationBodyForStory };
