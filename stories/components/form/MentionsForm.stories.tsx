import React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module 'lib/MentionsForm' or its corre... Remove this comment to see the full error message
import MentionsFormComponent from 'lib/MentionsForm';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

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
  title: 'Legacy/Form/Mentions Form',
  component: MentionsFormComponent,
  argTypes: {
    onSubmit: { action: 'Form submitted' },
    onCancel: { action: 'Cancelled' }
  }
};

export const MentionsForm = (args: any) => {
  return (
    <div>
      <StoryItem title="Mentions Form" description="Form with an author">
        <MentionsFormComponent
          onInputChange={() => {}}
          author={mockUser}
          users={mockUsers}
          placeholder="Try typing @ or hit the mention button"
          {...args}
        />
      </StoryItem>

      <StoryItem
        title="Mentions Form"
        description="Form without an author and defaultUsers"
      >
        <MentionsFormComponent
          onInputChange={action('onInputChange')}
          users={mockUsers}
          placeholder="Try typing @ or hit the mention button"
          displayEmail
          defaultUsers={[mockUser, mockUsers[1]]}
          {...args}
        />
      </StoryItem>
    </div>
  );
};

MentionsForm.parameters = {
  controls: { hideNoControlsWarning: true }
};
