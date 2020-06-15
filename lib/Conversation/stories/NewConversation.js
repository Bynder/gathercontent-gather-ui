import React from 'react';
import { mockActions, mockConversation, mockUser, mockUsers } from './mockData';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';

export function NewConversation({
  isActive,
  isSubscribed,
  isResolved,
  userCanResolve
}) {
  return (
    <BoundaryClickWatcher>
      {(boundaryIsActive, boundaryIsFocussed) => (
        <Conversation
          isActive={boundaryIsActive || isActive}
          isFocussed={boundaryIsFocussed}
        >
          {(boundaryIsActive || isActive) && (
            <Conversation.Header>
              <Comment.SubscribeToggle
                id={`${mockConversation.id}-subscribe`}
                isChecked={isSubscribed}
                onToggle={() => {}}
              />
              <Comment.ResolveButton
                resolved={isResolved}
                onUndoResolve={() => {}}
                onResolve={() => {}}
                userCanResolve={userCanResolve}
              />
            </Conversation.Header>
          )}
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
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}
