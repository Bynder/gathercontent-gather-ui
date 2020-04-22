import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockLongConversation,
  mockUserNoAvatar,
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

  return (
    <BoundaryClickWatcher>
      {boundaryIsActive => (
        <Conversation className={`${boundaryIsActive ? 'is-active' : ''}`}>
          <Conversation.Header
            id={mockLongConversation.id}
            userCanResolve
            onSubscribeChange={mockActions.onSubscribeChange}
            isSubscribed
          />
          <Conversation.Body>
            {boundaryIsActive ? (
              mockLongConversation.comments.map((comment, index) => (
                <Comment
                  className={`${comment.author.type ? 'has-author-type' : ''} ${
                    deletingId === comment.id ? 'is-visually-disabled' : ''
                  }`}
                >
                  <Comment.Body
                    users={mockUsers}
                    comment={comment}
                    isEditing={comment.id === editingId}
                    onEditSubmit={(...args) => {
                      setEditingId(null);
                      mockActions.editComment(...args);
                    }}
                    onEditCancel={() => setEditingId(null)}
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
                <Comment>
                  <Comment.Body comment={firstComment} users={mockUsers} />
                </Comment>
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
