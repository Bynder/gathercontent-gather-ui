import React from 'react';
import { storiesOf, action } from '@storybook/react';
import DueDatePicker from '../../lib/DueDatePicker';
import StoryItem from '../styleguide/StoryItem';
import moment from 'moment';

storiesOf('Components', module).add('DueDatePicker', () => (
  <div>
    <StoryItem title="Due date picker" description="+1 Day">
      <DueDatePicker
        label="Due Tommorrow at 2:15pm"
        dueDate={moment().add(1, 'day').set({hours:14,minutes:15})}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="None set">
      <DueDatePicker
        label="Due Tommorrow at 2:15pm"
        dueDate={null}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="+2 Months">
      <DueDatePicker
        label="Due Tommorrow at 12:00pm"
        dueDate={moment().add(2, 'months')}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="+4 Days">
      <DueDatePicker
        label="Due Tommorrow at 12:00pm"
        dueDate={moment().add(4, 'day')}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-4 Days">
      <DueDatePicker
        label="Due Tommorrow at 12:00pm"
        dueDate={moment().subtract(4, 'day')}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-4 Months">
      <DueDatePicker
        label="Due Tommorrow at 12:00pm"
        dueDate={moment().subtract(4, 'months')}
        setDueDate={action('setDueDate')}
      />
    </StoryItem>
  </div>
));
