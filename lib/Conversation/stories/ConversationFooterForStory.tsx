import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Comment, Conversation } from 'lib';
import { mockUser, mockUsers } from './mockData';
import { createDelayedPromise } from '../../../stories/helpers/createDelayedPromise';

// eslint-disable-next-line react/prop-types
function ConversationFooterForStory({
  isOpen
}: any) {
  const submitPromise = async (value: any, setCommentText: any) => {
    await createDelayedPromise()();
    setCommentText('');
  };

  return isOpen ? (
    <Conversation.Footer>
      <Comment.Provider isEditing isOpen>
        <Comment.Form
          users={mockUsers}
          author={mockUser}
          submitText="Reply"
          placeholder="Reply..."
          onSubmit={submitPromise}
          focusOnMount
        />
      </Comment.Provider>
    </Conversation.Footer>
  ) : null;
}

export { ConversationFooterForStory };
