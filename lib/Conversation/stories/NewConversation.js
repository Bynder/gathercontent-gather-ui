import React from 'react';
import { mockActions, mockUser, mockUsers } from './mockData';
import { Conversation } from '../Conversation';

export function NewConversation() {
  return (
    <Conversation isActive>
      <Conversation.Footer
        users={mockUsers}
        addComment={mockActions.addComment}
        onCommentChange={() => {}}
        user={mockUser}
        focusOnMount
        placeholder="Reply..."
      />
    </Conversation>
  );
}
