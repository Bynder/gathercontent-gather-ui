import React, { Fragment, useState } from 'react';
import {
  mockActions,
  mockComments,
  mockConversation,
  mockUser,
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
                  <Comment.Author author={comment.author} />
                  <Comment.Body>
                    {editingId !== comment.id && (
                      <Comment.Text>{comment.body}</Comment.Text>
                    )}
                    {editingId === comment.id && (
                      <Comment.Form
                        id={comment.id}
                        onCommentChange={() => {}}
                        onCancel={() => setEditingId(null)}
                        users={mockUsers}
                        author={mockUser}
                        onRowCountChange={() => {}}
                        onSubmit={(...args) => {
                          setEditingId(null);
                          mockActions.editComment(...args);
                        }}
                        value={comment.body}
                        placeholder=""
                        focusOnMount
                        editing
                        showAuthor={false}
                      />
                    )}
                    <Comment.Meta>
                      <Comment.Date createdAt={comment.createdAt} />
                      <Comment.Actions
                        onRemoveClick={() => setDeletingId(comment.id)}
                        onEditClick={() => setEditingId(comment.id)}
                      />
                    </Comment.Meta>
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
                  <Comment.Author author={firstComment.author} />
                  <Comment.Body>
                    <Comment.Text>{firstComment.body}</Comment.Text>
                  </Comment.Body>
                </Comment>
                <Comment.ReplyCount count={numberOfRepliesInbetween} />
                <Comment className="has-author-type conversation__latest-reply">
                  <Comment.Author author={lastComment.author} />
                  <Comment.Body>
                    <Comment.Text>{lastComment.body}</Comment.Text>
                  </Comment.Body>
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
