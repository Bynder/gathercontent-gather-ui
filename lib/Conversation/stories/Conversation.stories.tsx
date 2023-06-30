import React from "react";
import { Conversation as ConversationComponent } from "lib";
import BoundaryClickWatcher from "../../BoundaryClickWatcher";
import { ConversationHeaderForStory } from "./ConversationHeaderForStory";
import { ConversationFooterForStory } from "./ConversationFooterForStory";
import { ConversationBodyForStory } from "./ConversationBodyForStory";

export default {
  title: "Legacy/Conversations/Conversation",
  component: ConversationComponent,
  args: {
    isOpen: false,
    isSubscribed: false,
    isResolved: false,
    userCanResolve: true,
    commentHasFailedToSubscribe: false,
    commentHasFailedToSave: false,
    commentHasFailedToDelete: false,
  },
};

export const Conversation = ({
  isOpen,
  isSubscribed,
  isResolved,
  userCanResolve,
  commentHasFailedToSubscribe,
  commentHasFailedToSave,
  commentHasFailedToDelete,
}: any) => {
  const headerProps = {
    isOpen,
    isResolved,
    userCanResolve,
    isSubscribed,
    commentHasFailedToSubscribe,
  };

  const bodyProps = {
    isOpen,
    commentHasFailedToSave,
    commentHasFailedToDelete,
  };

  return (
    <div
      style={{
        maxWidth: "300px",
      }}
    >
      <BoundaryClickWatcher>
        {(boundaryIsActive, boundaryIsFocussed) => (
          <ConversationComponent
            isOpen={boundaryIsActive || isOpen}
            isFocussed={boundaryIsFocussed}
          >
            <ConversationHeaderForStory
              {...headerProps}
              isOpen={boundaryIsActive || isOpen}
            />
            <ConversationBodyForStory
              {...bodyProps}
              isOpen={boundaryIsActive || isOpen}
            />
            <ConversationFooterForStory
              isOpen={boundaryIsActive || isOpen}
              isFocussed={boundaryIsFocussed}
            />
          </ConversationComponent>
        )}
      </BoundaryClickWatcher>
    </div>
  );
};
