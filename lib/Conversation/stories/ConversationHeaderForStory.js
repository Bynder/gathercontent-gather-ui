/* eslint-disable react/prop-types */
import React from 'react';
import { Comment, Conversation } from 'lib';
import { mockConversation } from './mockData';

function ConversationHeaderForStory({
  isActive,
  isSubscribed,
  isResolved,
  userCanResolve
}) {
  return isActive ? (
    <Conversation.Header>
      <Comment.SubscribeToggle
        id={`${mockConversation.id}-subscribe`}
        isSubscribed={isSubscribed}
        onToggle={() => {}}
      />
      <Comment.ResolveButton
        resolved={isResolved}
        onUndoResolve={() => {}}
        onResolve={() => {}}
        userCanResolve={userCanResolve}
      />
    </Conversation.Header>
  ) : null;
}

export { ConversationHeaderForStory };
