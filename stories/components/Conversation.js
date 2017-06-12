import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Conversation from '../../lib/Conversation';
import StoryItem from '../styleguide/StoryItem';

const mockComments = [{
  id: 11,
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: '2017-06-08 09:56:41',
  createdBy: 2,
}, {
  id: 12,
  body: 'Comment body...',
  createdAt: 'Less than a minute ago',
  author: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
    name: 'Ricardo',
  }
}];

const mockConversation = {
  id: '1234567',
  comments: mockComments,
};

const mockActions = {
  resolveConversation: action('resolveConversation'),
  unresolveConversation: action('unresolveConversation'),
  removeComment: action('removeComment'),
  addComment: action('addComment'),
  editComment: action('editComment'),
  activateConversation: action('activateConversation'),
  deactivateConversation: action('deactivateConversation'),
};

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg'
};

storiesOf('Components', module)
  .add('Conversation', () => {
    return (
      <div>
        <StoryItem
          title="Conversation"
          description="..."
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            actions={mockActions}
            user={mockUser}
            userCanComment
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="..."
        >
          <Conversation
            id="1234567"
            comments={[mockConversation.comments[0]]}
            actions={mockActions}
            user={mockUser}
            userCanComment
          />
        </StoryItem>
      </div>
    );
  });
