import React, { useState } from 'react';
import {
  mockActions,
  mockComments,
  mockUserNoAvatar,
  mockUsers
} from './mockData';
import { Comment } from '../../Comment/Comment';
import { Conversation } from '../Conversation';

export function ConversationWithReply() {
  const [editingId, setEditingId] = useState();
  const [deletingId, setDeletingId] = useState();

  return (
    <Conversation isActive>
      <Conversation.Body>
        {mockComments.map((comment, index) => (
          <Comment
            className={`${comment.author.type ? 'has-author-type' : ''} ${
              deletingId === comment.id ? 'is-visually-disabled' : ''
            }`}
          >
            <Comment.Body
              users={mockUsers}
              onEditSubmit={(...args) => {
                setEditingId(null);
                mockActions.editComment(...args);
              }}
              comment={comment}
              isEditing={editingId === comment.id}
              onEditChange={() => {}}
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
