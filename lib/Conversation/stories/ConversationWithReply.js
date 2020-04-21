import React, { useState } from 'react';
import {
  mockActions,
  mockComments,
  mockUser,
  mockUserNoAvatar,
  mockUsers
} from './mockData';
import { Comment } from '../../Comment/Comment';
import { Conversation } from '../Conversation';

export function ConversationWithReply() {
  const [editingId, setEditingId] = useState();
  const [deletingId, setDeletingId] = useState();

  return (
    <Conversation className="is-active">
      <Conversation.Body>
        {mockComments.map((comment, index) => (
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
        ))}
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
  );
}
