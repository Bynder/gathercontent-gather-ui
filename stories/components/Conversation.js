import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Conversation from '../../lib/Conversation';
import StoryItem from '../styleguide/StoryItem';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

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
          description="A simple conversation"
        >
          <Conversation
            id="1234567"
            comments={[mockConversation.comments[0]]}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            userCanComment
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Conversation with reply"
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            userCanComment
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Collapsed Conversation with reply"
        >
          <Conversation
            id="1234567"
            comments={mockConversation.comments}
            resolveConversation={mockActions.resolveConversation}
            unresolveConversation={mockActions.unresolveConversation}
            removeComment={mockActions.removeComment}
            addComment={mockActions.addComment}
            editComment={mockActions.editComment}
            user={mockUser}
            userCanComment
            showComments={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Collapsed Conversation with reply wrapped in BoundaryClickWatcher"
        >
          <BoundaryClickWatcher>
            {(boundaryIsActive) => {
              return (
                <Conversation
                  id="1234567"
                  comments={mockConversation.comments}
                  resolveConversation={mockActions.resolveConversation}
                  unresolveConversation={mockActions.unresolveConversation}
                  removeComment={mockActions.removeComment}
                  addComment={mockActions.addComment}
                  editComment={mockActions.editComment}
                  user={mockUser}
                  userCanComment
                  showComments={boundaryIsActive}
                />
              )
            }}
          </BoundaryClickWatcher>
        </StoryItem>


        <StoryItem
          title="Conversation"
          description="Starting a new conversation"
        >
          <Conversation
            id="1234567"
            user={mockUser}
            addComment={mockActions.addComment}
            showComments
            userCanComment
          />
        </StoryItem>
      </div>
    );
  });
