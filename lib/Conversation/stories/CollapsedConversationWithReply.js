import React from 'react';
import { Conversation } from '../Conversation';
import { mockComments } from './mockData';
import { Comment } from '../../Comment/Comment';

export function CollapsedConversationWithReply() {
  const firstComment = mockComments[0];
  const lastComment = mockComments[mockComments.length - 1];
  const numberOfRepliesInbetween = mockComments.length - 2;

  return (
    <Conversation>
      <Conversation.Body>
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
      </Conversation.Body>
    </Conversation>
  );
}
