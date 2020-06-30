/*
eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Comment, Conversation } from 'lib';
import { mockConversation } from './mockData';
import { createDelayedPromise } from '../../../stories/helpers/createDelayedPromise';

function ConversationHeaderForStory({
  isOpen,
  isSubscribed,
  isResolved,
  userCanResolve
}) {
  const [subscribed, setSubscribed] = useState(isSubscribed);
  const promise = async () => {
    await createDelayedPromise(250)();
    setSubscribed(!subscribed);
  };

  return isOpen ? (
    <Conversation.Header>
      <Comment.SubscribeToggle
        id={`${mockConversation.id}-subscribe`}
        isSubscribed={subscribed}
        onToggle={promise}
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
