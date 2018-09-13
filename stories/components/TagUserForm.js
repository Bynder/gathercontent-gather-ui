import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagUserForm from '../../lib/TagUserForm';
import StoryItem from '../styleguide/StoryItem';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner',
  email: 'bruce@bruce.com'
};

const lockedUsers = [{
  id: 2,
  name: 'Bruce',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner',
  email: 'bruce@bruce.com'
},{
  id: 9,
  name: 'Diana Prince',
  avatar: '',
  initials: 'LP',
  display: 'lyndacarter',
  email: 'lyndalynda@lynda.com'
}];

const mockUsers = [
  mockUser,
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
];

storiesOf('Components', module)
  .add('Tag user Form', () => {
    return (
      <div>
        <StoryItem
          title="Tag user Form"
        >
          <TagUserForm
            onInputChange={() => {}}
            onSubmit={action('onSubmit')}
            onCancel={action('onCancel')}
            author={mockUser}
            users={mockUsers}
            placeholder="Add a message..."
          />
        </StoryItem>

        <StoryItem
          title="Tag user Form"
          description="Form with locked users"
        >
          <TagUserForm
            onInputChange={() => {}}
            onSubmit={action('onSubmit')}
            onCancel={action('onCancel')}
            users={mockUsers}
            placeholder="Add a message..."
            lockedUsers={lockedUsers}
          />
        </StoryItem>
      </div>
    );
  });
