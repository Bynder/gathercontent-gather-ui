import React from "react";
import { Comment, Conversation } from "lib";
import { mockUser, mockUsers } from "./mockData";
import { createDelayedPromise } from "../../../stories/helpers/createDelayedPromise";

// eslint-disable-next-line react/prop-types
function ConversationFooterForStory({ isOpen }: any) {
  const submitPromise = async (value: any, setCommentText: any) => {
    await createDelayedPromise()();
    setCommentText("");
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
