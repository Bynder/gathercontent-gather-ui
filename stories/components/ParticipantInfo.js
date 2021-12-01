import React from 'react';
import { action } from '@storybook/addon-actions';
import ParticipantInfo from '../../lib/ParticipantInfo';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _ParticipantInfo = () => (
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
);

_ParticipantInfo.story = {
  name: 'ParticipantInfo',
};
