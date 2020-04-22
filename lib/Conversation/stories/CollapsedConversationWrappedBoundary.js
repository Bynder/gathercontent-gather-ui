import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockComments,
  mockConversation,
  mockUserNoAvatar,
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

  return (
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <Conversation className={`${boundaryIsActive ? 'is-active' : ''}`}>
          <Conversation.Header
            id={mockConversation.id}
            userCanResolve
            onSubscribeChange={mockActions.onSubscribeChange}
            isSubscribed
          />
          <Conversation.Body>
            {boundaryIsActive ? (
              mockComments.map((comment, index) => (
                <Comment
                  className={`${comment.author.type ? 'has-author-type' : ''} ${
                    deletingId === comment.id ? 'is-visually-disabled' : ''
                  }`}
                >
                  <Comment.Body
                    users={mockUsers}
                    comment={comment}
                    isEditing={editingId === comment.id}
                    onEditSubmit={(...args) => {
                      mockActions.editComment(...args);
                      setEditingId(null);
                    }}
                    onEditCancel={() => setEditingId(null)}
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
                <Comment>
                  <Comment.Body comment={firstComment} users={mockUsers} />
                </Comment>
                <Comment.ReplyCount count={numberOfRepliesInbetween} />
                <Comment className="has-author-type conversation__latest-reply">
                  <Comment.Body comment={lastComment} users={mockUsers} />
                </Comment>
              </Fragment>
            )}
          </Conversation.Body>
          <Conversation.Footer
            users={mockUsers}
            addComment={mockActions.addComment}
            onCommentChange={() => {}}
            user={mockUserNoAvatar}
            focusOnMount
            placeholder="Reply..."
          />
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}
