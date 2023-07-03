import React from 'react';
import ParticipantInfoComponent from '../../lib/ParticipantInfo';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Participant Info',
  component: ParticipantInfoComponent
};

export const ParticipantInfo = () => (
  <div>
    <StoryItem
      title="Page information: Just a title"
      description="Includes a title as a minimum"
    >
      <ParticipantInfoComponent
        name="Angus Edwardson"
        email="example@gmail.com"
        // @ts-expect-error TS(2322): Type '{ name: string; email: string; pillboxText: ... Remove this comment to see the full error message
        pillboxText="Assigned"
      />
    </StoryItem>
  </div>
);

ParticipantInfo.parameters = {
  controls: { hideNoControlsWarning: true }
};
