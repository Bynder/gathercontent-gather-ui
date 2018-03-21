import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Contributors from '../../lib/Contributors';
import StoryItem from '../styleguide/StoryItem';

const mockActions = {
  addAssignee: action('addAssignee'),
  removeAssignee: action('removeAssignee'),
  handleSearchChange: action('handleSearchChange'),
  handleClearResults: action('handleClearResults'),
};

const mockAssignee = {
  id: 2,
  name: 'Bruce Banner',
  avatar: 'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
  initials: 'BB',
  colour: '#3D8AEB',
  isPresent: true
};

const mockAssigneeNoAvatar = {
  id: 5,
  name: 'Lynda Carter',
  initials: 'LC',
  colour: '',
  isPresent: false,
};

const mockViewer = {
  id: 5,
  name: 'Diana Prince',
  avatar: 'https://d3iw72m71ie81c.cloudfront.net/female-83.jpg',
  initials: 'DP',
  colour: '#FC5C54',
};

const mockResults = [{
  name: 'Clark Kent',
  email: 'clarkkent@waffles.com',
  avatar: 'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg',
  initials: 'CK',
  action: mockActions.addAssignee,
  type: 'avatar',
},{
  name: 'Bruce Wayne',
  email: 'brucewayne@waffles.com',
  initials: 'BW',
  action: mockActions.addAssignee,
  type: 'avatar',
}]

storiesOf('Components', module)
  .add('Contributors', () => {
    return (
      <div>

      <StoryItem
        title="Contributors"
        description="Contributors with no current assignees"
      >
        <Contributors
          currentViewers={[mockViewer]}
          searchResults={mockResults}
          removeAssignee={mockActions.removeAssignee}
          handleSearchChange={mockActions.handleSearchChange}
          handleClearResults={mockActions.handleClearResults}
          userCanAddAssignee
        />
      </StoryItem>

        <StoryItem
          title="Contributors"
          description="Contributors with userCanAddAssignee set to true"
        >
          <Contributors
            currentAssignees={[mockAssignee, mockAssigneeNoAvatar]}
            currentViewers={[mockViewer]}
            searchResults={mockResults}
            removeAssignee={mockActions.removeAssignee}
            handleSearchChange={mockActions.handleSearchChange}
            handleClearResults={mockActions.handleClearResults}
            userCanAddAssignee
          />
        </StoryItem>

        <StoryItem
          title="Contributors"
          description="Contributors with userCanAddAssignee set to false"
        >
          <Contributors
            currentAssignees={[mockAssignee, mockAssigneeNoAvatar]}
            currentViewers={[mockViewer]}
            searchResults={mockResults}
            removeAssignee={mockActions.removeAssignee}
            handleSearchChange={mockActions.handleSearchChange}
            handleClearResults={mockActions.handleClearResults}
            userCanAddAssignee={false}
          />
        </StoryItem>
      </div>
    );
  });
