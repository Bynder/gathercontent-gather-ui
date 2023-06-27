import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ConversationContext as ConversationContextComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Conversations/Conversation Context',
  component: ConversationContextComponent
};

export const ConversationContext = () => {
  const mockUser = {
    id: 2,
    name: 'Bruce',
    avatar:
      'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
    initials: 'BB',
    display: 'brucebanner'
  };

  const mockComments = [
    {
      id: 'comment-id-1',
      body:
        'Here is a decent size comment that was created by someone who wanted to comment.',
      createdAt: '2017-06-08 09:56:41',
      author: mockUser,
      createdBy: 2
    },
    {
      id: 'comment-id-2',
      body: 'Comment body and a link to http://google.com and a @mention',
      createdAt: 'Less than a minute ago',
      author: {
        avatar:
          'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
        name: 'Ricardo',
        initials: 'RB'
      },
      createdBy: 2
    }
  ];
  return (
    <>
      <StoryItem
        title="ConversationContextComponent Component"
        description="Display a conversation with some context"
      >
        <ConversationContextComponent
          label="A nice label"
          id="123"
          userCanResolve
          comments={mockComments}
          resolveConversation={() => {}}
          users={[]}
          resolved
        >
          <span>Hello!</span>
        </ConversationContextComponent>
      </StoryItem>
      <StoryItem
        title="ConversationContextComponent Component"
        description="Conversation context with no children"
      >
        <ConversationContextComponent
          label="A nice label"
          id="123"
          resolved={false}
          userCanResolve
          comments={mockComments}
          resolveConversation={() => {}}
          users={[]}
        >
          {null}
        </ConversationContextComponent>
      </StoryItem>
    </>
  );
};

ConversationContext.parameters = {
  controls: { hideNoControlsWarning: true }
};
