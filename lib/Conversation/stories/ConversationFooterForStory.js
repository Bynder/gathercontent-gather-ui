import React from "react";
import { Comment, Conversation } from "lib";
import { mockActions, mockUser, mockUsers } from "./mockData";

function ConversationFooterForStory({ isActive }) {
  return isActive ? (
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
  ) : null;
}

export { ConversationFooterForStory };
