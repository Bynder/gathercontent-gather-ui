import React from 'react';
import { action } from '@storybook/addon-actions';
import MentionsForm from '../../lib/MentionsForm';
import StoryItem from '../styleguide/StoryItem';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar:
    'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner',
  email: 'bruce@bruce.com',
};

const mockUsers = [
  mockUser,
  {
    id: 'saul',
    display: 'saulgoodman',
    name: 'Saul Goodman',
    initials: 'SG',
    email: 'heythere@lol.com',
  },
  {
    id: '456',
    display: 'jessepinkman',
    name: 'Jesse Pinkman',
    email: 'heythere@lol.com',
    initials: 'JP',
    url: 'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg',
  },
];

export default {
  title: 'Components',
};

export const _MentionsForm = () => {
  return (
    <div>
      <StoryItem title="Mentions Form" description="Form with an author">
        <MentionsForm
          onInputChange={() => {}}
          onSubmit={action('onSubmit')}
          onCancel={action('onCancel')}
          author={mockUser}
          users={mockUsers}
          placeholder="Try typing @ or hit the mention button"
        />
      </StoryItem>

      <StoryItem
        title="Mentions Form"
        description="Form without an author and defaultUsers"
      >
        <MentionsForm
          onInputChange={action('onInputChange')}
          onSubmit={action('onSubmit')}
          onCancel={action('onCancel')}
          users={mockUsers}
          placeholder="Try typing @ or hit the mention button"
          displayEmail
          defaultUsers={[mockUser, mockUsers[1]]}
        />
      </StoryItem>
    </div>
  );
};
