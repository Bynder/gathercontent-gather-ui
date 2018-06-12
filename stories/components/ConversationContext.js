import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConversationContext } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner'
};

const mockComments = [{
  id: 'comment-id-1',
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2
}, {
  id: 'comment-id-2',
  body: 'Comment body and a link to http://google.com and a @mention',
  createdAt: 'Less than a minute ago',
  author: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
    name: 'Ricardo',
    initials: 'RB',
  },
  createdBy: 2
}];

storiesOf('Components', module).add('Conversation Context', () => (
  <div>
    <StoryItem
      title="ConversationContext Component"
      description="Display a conversation with some context"
    >
      <ConversationContext
        label="A nice label"
        id="123"
        resolved={true}
        comments={mockComments}
        resolveConversation={()=>{}}
      >
        <span>Hello!</span>
      </ConversationContext>
    </StoryItem>
    <StoryItem
      title="ConversationContext Component"
      description="Conversation context with no children"
    >
      <ConversationContext
        label="A nice label"
        id="123"
        resolved={true}
        comments={mockComments}
        resolveConversation={()=>{}}
      >
        {null}
      </ConversationContext>
    </StoryItem>
  </div>
));
