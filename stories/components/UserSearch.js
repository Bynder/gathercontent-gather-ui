import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UserSearch } from '../../lib';
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

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

export const _UserSearch = () => {
  return (
    <div>
      <StoryItem
        title="User search"
        description="A list of users with a search!"
      >
        <UserSearch
          users={mockUsers}
          addUser={(user) => action(`user ${user.name} was clicked!`)}
          displayEmail={boolean('display email', true)}
          useDisplayToggle={boolean('display toggle', false)}
          subheading={text('subheading', '')}
          minUserLength={number('minimum user length', 0)}
          noUserDisplay={text(
            'no users display text',
            'Looks like there are no people!'
          )}
          searchHeading={text('heading', 'Search...')}
          selectedUserIds={['456']}
        />
      </StoryItem>
    </div>
  );
};

_UserSearch.story = {
  name: 'UserSearch',
};
