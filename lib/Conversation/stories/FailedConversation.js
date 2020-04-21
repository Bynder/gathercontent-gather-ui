import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockConversation,
  mockFailedComment,
  mockUser,
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
                <Comment.Author author={failedComment.author} />
                <Comment.Body>
                  {editingId !== failedComment.id && (
                    <Comment.Text>{failedComment.body}</Comment.Text>
                  )}
                  {editingId === failedComment.id && (
                    <Comment.Form
                      id={failedComment.id}
                      onCommentChange={() => {}}
                      onCancel={() => setEditingId(null)}
                      users={mockUsers}
                      author={mockUser}
                      onRowCountChange={() => {}}
                      onSubmit={(...args) => {
                        setEditingId(null);
                        mockActions.editComment(...args);
                      }}
                      value={failedComment.body}
                      placeholder=""
                      focusOnMount
                      editing
                      showAuthor={false}
                    />
                  )}
                  <Comment.Meta>
                    <Comment.Failed onRetry={() => {}} />
                  </Comment.Meta>
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
                  <Comment.Author author={failedComment.author} />
                  <Comment.Body>
                    <Comment.Text>{failedComment.body}</Comment.Text>
                  </Comment.Body>
                </Comment>
              </Fragment>
            )}
          </Conversation.Body>
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
}
