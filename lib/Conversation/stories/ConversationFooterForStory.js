import React from 'react';
import { Comment, Conversation } from 'lib';
import { mockUser, mockUsers } from './mockData';
import { createDelayedPromise } from '../../../stories/helpers/createDelayedPromise';

// eslint-disable-next-line react/prop-types
function ConversationFooterForStory({ isOpen }) {
  const submitPromise = createDelayedPromise();

  return isOpen ? (
    <Conversation.Footer>
      <Comment.Provider isEditing>
        <Comment.EditForm
          users={mockUsers}
          author={mockUser}
          placeholder="Reply..."
          onSubmit={submitPromise}
          hideOnSubmit={false}
          focusOnMount
        />
      </Comment.Provider>
    </Conversation.Footer>
  ) : null;
}

export { ConversationFooterForStory };
