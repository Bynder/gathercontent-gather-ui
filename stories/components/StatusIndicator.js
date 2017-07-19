import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusIndicator from '../../lib/StatusIndicator/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('StatusIndicator', () => {
    return (
      <div>
        <StoryItem title="Status Indicator" description="Current">
          <StatusIndicator
            color="rgb(250, 167, 50)"
            label="Editing"
            current
            description={'Edits to be made in response to user testing and the feedback from the senior editor and subject matter expert.'}
          >
            due Tommorrow at 12:00pm
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Completed">
          <StatusIndicator color="#3d8aeb" label="Review" completed>
            due Tommorrow at 12:00pm
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Consists of a color and a label to express a status.">
          <StatusIndicator color="#ff6300" label="Draft">
            due Tommorrow at 12:00pm
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="">
          <StatusIndicator color="#93724f" label="Publishing">
            set a due date
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Optional children">
          <StatusIndicator color="#965de8" label="Approval" />
        </StoryItem>
      </div>
    );
  });
