import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockComments,
  mockConversation,
  mockUser,
  mockUsers
} from './mockData';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function CollapsedConversationWrappedBoundary() {
  const firstComment = mockComments[0];
  const lastComment = mockComments[mockComments.length - 1];
  const numberOfRepliesInbetween = mockComments.length - 2;

  const [editingId, setEditingId] = useState();
  const [deletingId, setDeletingId] = useState();
  const [isResolved, setIsResolved] = useState(false);

  return (
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <Conversation isActive={boundaryIsActive}>
          {boundaryIsActive && (
            <Conversation.Header
              id={mockConversation.id}
              userCanResolve
              onSubscribeChange={mockActions.onSubscribeChange}
              isSubscribed
              resolved={isResolved}
              resolveConversation={() => setIsResolved(true)}
              handleUndoResolve={() => setIsResolved(false)}
            />
          )}
          <Conversation.Body isActive={boundaryIsActive}>
            {boundaryIsActive ? (
              mockComments.map((comment, index) => (
                <Comment isActive={boundaryIsActive}>
                  <Comment.Body
                    users={mockUsers}
                    comment={comment}
                    isEditing={editingId === comment.id}
                    onEditSubmit={(...args) => {
                      mockActions.editComment(...args);
                      setEditingId(null);
                    }}
                    onEditCancel={() => setEditingId(null)}
                    isDeleting={deletingId === comment.id}
                  >
                    {editingId !== comment.id && (
                      <Comment.Meta
                        createdAt={comment.createdAt}
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
                      index === 0 && mockComments.length > 1
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
                <Comment.ReplyCount count={numberOfRepliesInbetween} />
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
