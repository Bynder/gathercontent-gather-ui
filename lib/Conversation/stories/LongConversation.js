import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockConversation,
  mockLongConversation,
  mockUser,
  mockUsers
} from './mockData';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function LongConversation() {
  const firstComment = mockLongConversation.comments[0];
  const lastComment =
    mockLongConversation.comments[mockLongConversation.comments.length - 1];

  const [editingId, setEditingId] = useState();
  const [deletingId, setDeletingId] = useState();
  const [isResolved, setIsResolved] = useState(false);

  return (
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <Conversation isActive={boundaryIsActive}>
          {boundaryIsActive && (
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
          )}
          <Conversation.Body isActive={boundaryIsActive}>
            {boundaryIsActive ? (
              mockLongConversation.comments.map((comment, index) => (
                <Comment isActive>
                  <Comment.Body
                    users={mockUsers}
                    comment={comment}
                    isEditing={comment.id === editingId}
                    onEditSubmit={(...args) => {
                      setEditingId(null);
                      mockActions.editComment(...args);
                    }}
                    onEditCancel={() => setEditingId(null)}
                    showFullText={boundaryIsActive}
                    isDeleting={comment.id === deletingId}
                  >
                    {comment.id !== editingId && (
                      <Comment.Meta
                        createdAt={comment.createdAt}
                        showDate
                        onEditClick={() => setEditingId(comment.id)}
                        onRemoveClick={() => setDeletingId(comment.id)}
                      />
                    )}
                  </Comment.Body>
                  <Comment.Overlay
                    onCancel={() => setDeletingId(null)}
                    onConfirm={mockActions.removeComment}
                    show={deletingId === comment.id}
                    text={
                      index === 0 && mockLongConversation.comments.length > 1
                        ? 'Delete thread'
                        : 'Delete comment'
                    }
                  />
                </Comment>
              ))
            ) : (
              <Fragment>
                <Comment className="conversation-comment__line">
                  <Comment.Body comment={firstComment} users={mockUsers} />
                </Comment>
                <Comment className="pt-0">
                  <Comment.Body comment={lastComment} users={mockUsers} />
                </Comment>
              </Fragment>
            )}
          </Conversation.Body>
          {boundaryIsActive && (
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
          )}
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}
