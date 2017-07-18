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
            <span className={'due-date'}>due Tommorrow at 12:00pm</span>
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Completed">
          <StatusIndicator color="#3d8aeb" label="Review" completed>
            <span className={'due-date'}>due Tommorrow at 12:00pm</span>
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Consists of a color and a label to express a status.">
          <StatusIndicator color="#ff6300" label="Draft">
            <span className={'due-date'}>due Tommorrow at 12:00pm</span>
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="">
          <StatusIndicator color="#93724f" label="Publishing">
            <span className={'due-date'}>set a due date</span>
          </StatusIndicator>
        </StoryItem>

        <StoryItem description="Optional children">
          <StatusIndicator color="#965de8" label="Approval" />
        </StoryItem>
      </div>
    );
  });
