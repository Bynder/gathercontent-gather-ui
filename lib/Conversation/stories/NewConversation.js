import React from 'react';
import { mockActions, mockUser, mockUsers } from './mockData';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function NewConversation() {
  return (
    <Conversation isActive>
      <Conversation.Footer>
        <Comment.NewForm
          users={mockUsers}
          onSubmit={mockActions.addComment}
          onCommentChange={() => {}}
          author={mockUser}
          focusOnMount
          placeholder="New comment..."
        />
      </Conversation.Footer>
    </Conversation>
  );
}
