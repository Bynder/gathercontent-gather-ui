import React from 'react';
import { Comment, Conversation } from 'lib';
import { mockActions, mockUser, mockUsers } from './mockData';

// eslint-disable-next-line react/prop-types
function ConversationFooterForStory({ isOpen }) {
  return isOpen ? (
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
  ) : null;
}

export { ConversationFooterForStory };
