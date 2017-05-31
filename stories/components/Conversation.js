import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Conversation from '../../lib/Conversation/';
import StoryItem from '../styleguide/StoryItem';

const mockComments = [{
  id: 11,
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: 'Less than a minute ago',
  person: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
    name: 'Ricardo',
  }
}, {
  id: 12,
  body: 'Comment body...',
  createdAt: 'Less than a minute ago',
  person: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
    name: 'Ricardo',
  }
}];

const mockConversation = {
  id: '1234567',
  comments: mockComments,
};

const mockActions = {
  resolveConversation: action('resoleConversation'),
  unresolveConversation: action('unresoleConversation'),
  removeComment: action('removeComment'),
  addComment: action('addComment'),
  editComment: action('editComment'),
};

storiesOf('Components', module)
  .add('Conversation', () => {
    return (
      <div>
        <StoryItem
          title="Conversation"
          description="..."
        >
          <div className="grid">
            {/* todo: collapsed state (default) */}
            {/* todo: click to fire action */}
            {/* todo: click off to fire action */}
            {/* todo: hover state */}
            {/* todo: truncated text */}
            {/* todo: hidden comments */}
            {/*<div className="grid__cell grid__cell--1-2">*/}
              <Conversation
                id={mockConversation.id}
                comments={mockConversation.comments}
                actions={mockActions}
                userCanEdit={true}
                userCanComment={true}
                userId={2}
                isResolved={false}
              />
            {/*</div>*/}
          </div>
        </StoryItem>
      </div>
    );
  });
