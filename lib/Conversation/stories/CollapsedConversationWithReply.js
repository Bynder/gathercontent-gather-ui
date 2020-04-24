import React from 'react';
import { Conversation } from '../Conversation';
import { mockComments, mockUsers } from './mockData';
import { Comment } from '../../Comment/Comment';

export function CollapsedConversationWithReply() {
  const firstComment = mockComments[0];
  const lastComment = mockComments[mockComments.length - 1];
  const numberOfRepliesInbetween = mockComments.length - 2;

  return (
    <Conversation>
      <Conversation.Body>
        <Comment className="conversation-comment__line">
          <Comment.Body
            isEditing={false}
            comment={firstComment}
            users={mockUsers}
          />
        </Comment>
        <Comment.ReplyCount count={numberOfRepliesInbetween} />
        <Comment>
          <Comment.Body
            isEditing={false}
            comment={lastComment}
            users={mockUsers}
          />
        </Comment>
      </Conversation.Body>
    </Conversation>
  );
}
