/*
eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Comment, Conversation } from "lib";
import { mockConversation } from "./mockData";
import { createDelayedPromise } from "../../../stories/helpers/createDelayedPromise";
import { createFailedPromise } from "../../../stories/helpers/createFailedPromise";

function ConversationHeaderForStory({
  isOpen,
  isSubscribed,
  isResolved,
  userCanResolve,
  commentHasFailedToSubscribe,
}: any) {
  const [subscribed, setSubscribed] = useState(isSubscribed);

  useEffect(() => {
    setSubscribed(isSubscribed);
  }, [isSubscribed]);

  const promise = async () => {
    if (commentHasFailedToSubscribe) {
      await createFailedPromise(250)();
    } else {
      await createDelayedPromise(250)();
    }
    setSubscribed(!subscribed);
  };

  return isOpen ? (
    <Conversation.Header>
      <Comment.SubscribeToggle
        // @ts-expect-error
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
