import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Conversation from '../../lib/Conversation';
import StoryItem from '../styleguide/StoryItem';
import BoundaryClickWatcher from '../../lib/BoundaryClickWatcher';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner'
};

const mockUserNoAvatar = {
  id: 5,
  name: 'Lynda',
  initials: 'LC',
  display: 'lyndacarter'
};

const mockUsers = [
  mockUser,
  mockUserNoAvatar,
  {
    id: 'saul',
    display: 'saulgoodman',
    name: 'Saul Goodman',
    initials: 'SG',
    email: 'heythere@lol.com'
  },
  {
    id: '456',
    display: 'jessepinkman',
    name: 'Jesse Pinkman',
    email: 'heythere@lol.com',
    initials: 'JP',
    url:
      'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
  }
]

const mockComments = [{
  id: 'comment-id-1',
  body: 'Here is a decent size comment that was created by someone who wanted to comment.',
  createdAt: '2017-06-08 09:56:41',
  author: mockUser,
  createdBy: 2
}, {
  id: 'comment-id-2',
  body: 'Comment body and a link to http://google.com and a mention @lyndacarter',
  createdAt: 'Less than a minute ago',
  author: {
    avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/26263_nH1Vuciy3psgQEUCVXZPTVU2RzUyMJ2arUIH7le8U4RrJ9LjFrtvEmyzf2XFgnZ7.png',
    name: 'Ricardo',
    initials: 'RB',
  },
  createdBy: 2
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

storiesOf('Components', module)
  .add('Conversation', () => {
    return (
      <div>
        <StoryItem
          title="Conversation"
          description="Starting a new conversation"
        >
          <Conversation
            id="1234567"
            user={mockUser}
            users={mockUsers}
            addComment={mockActions.addComment}
            showComments
            userCanComment
          />
        </StoryItem>

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
            user={mockUserNoAvatar}
            users={mockUsers}
            userCanComment
            focusOnMount={false}
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
            users={mockUsers}
            userCanComment
            focusOnMount={false}
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
            users={mockUsers}
            userCanComment
            showComments={false}
          />
        </StoryItem>

        <StoryItem
          title="Conversation"
          description="Collapsed Conversation with reply wrapped in BoundaryClickWatcher"
        >
          <BoundaryClickWatcher>
            {boundaryIsActive => (
              <Conversation
                id="1234567"
                comments={mockConversation.comments}
                resolveConversation={mockActions.resolveConversation}
                unresolveConversation={mockActions.unresolveConversation}
                removeComment={mockActions.removeComment}
                addComment={mockActions.addComment}
                editComment={mockActions.editComment}
                user={mockUser}
                users={mockUsers}
                userCanComment
                focusOnMount
                showComments={boundaryIsActive}
              />
            )}
          </BoundaryClickWatcher>
        </StoryItem>
      </div>
    );
  });
