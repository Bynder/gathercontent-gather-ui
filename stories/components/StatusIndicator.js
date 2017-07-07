import React from 'react';
import { storiesOf, action } from '@storybook/react';
import StatusIndicator from '../../lib/StatusIndicator/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('StatusIndicator', () => {
    return (
      <div>
        <StoryItem
          title="Status Indicator"
          description="Consists of a color and a label to express a status.">
          <StatusIndicator color="#ff6300" label="Draft">
            <span> due <a href="#">Tommorrow at 12:00pm</a></span>
          </StatusIndicator>
        </StoryItem>
      </div>
    );
  });
