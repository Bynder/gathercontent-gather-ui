import React, { useState } from 'react';
import {
  mockActions,
  mockComments,
  mockConversation,
  mockUser,
  mockUsers
} from './mockData';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function SimpleConversation() {
  const comment = mockComments[0];
  const [isResolved, setIsResolved] = useState(false);

  return (
    <Conversation isActive>
      <Conversation.Header>
        <Comment.SubscribeToggle
          onToggle={mockActions.onSubscribeChange}
          isChecked
          id={`${mockConversation.id}-subscribe`}
        />
        <Comment.ResolveButton
          resolved={isResolved}
          onUndoResolve={() => setIsResolved(false)}
          userCanResolve
          onResolve={() => setIsResolved(true)}
        />
      </Conversation.Header>

      <Conversation.Body>
        <Comment>
          <Comment.Body isEditing={false} comment={comment} users={mockUsers}>
            <Comment.Meta createdAt={comment.createdAt} showDate />
          </Comment.Body>
        </Comment>
      </Conversation.Body>

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
    </Conversation>
  );
}
