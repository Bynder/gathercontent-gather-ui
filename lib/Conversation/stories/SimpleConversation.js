import React from 'react';
import {
  mockActions,
  mockComments,
  mockConversation,
  mockUser,
  mockUsers
} from './mockData';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function SimpleConversation() {
  const comment = mockComments[0];

  return (
    <Conversation isActive>
      <Conversation.Header
        id={mockConversation.id}
        icon="template"
        isSubscribed={false}
        onSubscribeChange={mockActions.onSubscribeChange}
        userCanResolve={false}
      />

      <Conversation.Body>
        <Comment>
          <Comment.Body isEditing={false} comment={comment} users={mockUsers}>
            <Comment.Meta createdAt={comment.createdAt} showDate />
          </Comment.Body>
        </Comment>
      </Conversation.Body>

      <Conversation.Footer>
        <Comment.NewForm
          users={mockUsers}
          onSubmit={mockActions.addComment}
          onCommentChange={() => {}}
          author={mockUser}
          focusOnMount
          placeholder="Reply..."
        />
      </Conversation.Footer>
    </Conversation>
  );
}
