import React from 'react';
import { UserSearch as UserSearchComponent } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const mockUser = {
  id: 2,
  name: 'Bruce',
  avatar:
    'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  display: 'brucebanner',
  email: 'bruce@bruce.com'
};

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

export default {
  title: 'Legacy/User Search',
  component: UserSearchComponent,
  args: {
    displayEmail: true,
    useDisplayToggle: false,
    subheading: '',
    noUserDisplay: 'Looks like there are no people!',
    searchHeading: 'Search...',
    minUserLength: 0
  },
  argTypes: {
    addUser: { action: 'User was clicked' }
  }
};

export const UserSearch = args => {
  return (
    <div>
      <StoryItem
        title="User search"
        description="A list of users with a search!"
      >
        <UserSearchComponent
          users={mockUsers}
          selectedUserIds={['456']}
          {...args}
        />
      </StoryItem>
    </div>
  );
};
