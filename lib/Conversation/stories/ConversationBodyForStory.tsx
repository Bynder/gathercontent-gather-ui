/* eslint-disable react/prop-types */
import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Comment, Conversation } from 'lib';
import { mockComments } from './mockData';
import { createDelayedPromise } from '../../../stories/helpers/createDelayedPromise';
import { createFailedPromise } from '../../../stories/helpers/createFailedPromise';
import { ExistingCommentExample } from './ExistingCommentExample';

function ConversationBodyForStory({
  isOpen,
  commentHasFailedToSave,
  commentHasFailedToDelete
}: any) {
  const numberOfRepliesInbetween = mockComments.length - 2;

  const commentsToMap = !isOpen
    ? [mockComments[0], mockComments[mockComments.length - 1]]
    : mockComments;

  const submitPromise = commentHasFailedToSave
    ? createFailedPromise()
    : createDelayedPromise();

  const deletePromise = commentHasFailedToDelete
    ? createFailedPromise()
    : createDelayedPromise();

  const comments = commentsToMap.map((c, index) => (
    <div key={c.id}>
      <Comment.Provider isOpen={isOpen} showBorders={mockComments.length === 2}>
        <ExistingCommentExample
          comment={c}
          isFirst={index === 0}
          submitPromise={submitPromise}
          deletePromise={deletePromise}
        />
      </Comment.Provider>

      {!isOpen && index === 0 && numberOfRepliesInbetween > 0 && (
        <Comment.ReplyCount count={numberOfRepliesInbetween} />
      )}
    </div>
  ));

  return <Conversation.Body>{comments}</Conversation.Body>;
}

export { ConversationBodyForStory };
