import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusIndicator from '../../lib/StatusIndicator';
import Button from '../../lib/Button';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('StatusIndicator', () => (
  <div>
    <StoryItem title="Status Indicator" description="Current">
      <StatusIndicator
        color="rgb(250, 167, 50)"
        label="Editing"
        current
        description={
          'Edits to be made in response to user testing and the feedback from the senior editor and subject matter expert.'
        }
        actions={<Button types={['primary']} clickHandler={()=>{}}>Test Button</Button>}
      >
        Due Tommorrow at 12:00pm
      </StatusIndicator>
    </StoryItem>

    <StoryItem description="Completed">
      <StatusIndicator color="#3d8aeb" label="Review" completed>
        Due Tommorrow at 12:00pm
      </StatusIndicator>
    </StoryItem>

    <StoryItem description="Bordered">
      <StatusIndicator color="#3d8aeb" label="Review" bordered>
        Due Tommorrow at 12:00pm
      </StatusIndicator>
    </StoryItem>

    <StoryItem description="Bordered">
      <StatusIndicator color="#3d8aeb" label="Review and read only" bordered readOnly>
        Due Tommorrow at 12:00pm
      </StatusIndicator>
    </StoryItem>

    <StoryItem description="Consists of a color and a label to express a status.">
      <StatusIndicator color="#ff6300" label="Draft">
        Due Tommorrow at 12:00pm
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

    <StoryItem title="Soft label & Small">
      <StatusIndicator
        color="rgb(250, 167, 50)"
        label="Due Tommorrow at 12:00pm"
        softLabel
        small
      />
    </StoryItem>
  </div>
));
