import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockConversation,
  mockFailedComment,
  mockUsers
} from './mockData';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { Conversation } from '../Conversation';
import { Comment } from '../../Comment/Comment';

export function FailedConversation() {
  const failedComment = mockFailedComment[0];

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
              <Comment
                className={`${
                  failedComment.author.type ? 'has-author-type' : ''
                } ${
                  deletingId === failedComment.id ? 'is-visually-disabled' : ''
                }`}
              >
                <Comment.Body
                  users={mockUsers}
                  comment={failedComment}
                  onEditSubmit={(...args) => {
                    setEditingId(null);
                    mockActions.editComment(...args);
                  }}
                  isEditing={failedComment.id === editingId}
                >
                  {failedComment.hasFailed ? (
                    <Comment.Failed />
                  ) : (
                    <Comment.Meta />
                  )}
                </Comment.Body>
                <Comment.Overlay
                  onCancel={() => setDeletingId(null)}
                  onConfirm={mockActions.removeComment}
                  show={deletingId === failedComment.id}
                  text="Delete thread"
                />
              </Comment>
            ) : (
              <Fragment>
                <Comment>
                  <Comment.Body comment={failedComment} users={mockUsers} />
                </Comment>
              </Fragment>
            )}
          </Conversation.Body>
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}
