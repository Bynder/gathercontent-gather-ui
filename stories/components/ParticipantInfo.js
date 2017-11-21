import React from 'react';
import { storiesOf, action } from '@storybook/react';
import ParticipantInfo from '../../lib/ParticipantInfo';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('ParticipantInfo', () => (
  <div>
    <StoryItem
      title="Page information: Just a title"
      description="Includes a title as a minimum"
    >
      <ParticipantInfo
        name="Angus Edwardson"
        email="example@gmail.com"
        pillboxText="Assigned"
      />
    </StoryItem>
  </div>
));
