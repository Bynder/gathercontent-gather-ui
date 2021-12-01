import React from 'react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import DueDatePicker from '../../lib/DueDatePicker';
import DueDateLabel from '../../lib/DueDatePicker/DueDateLabel';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _2 = 'months';

_2.story = {
  name: 2,
};

export const _1 = 'day';

_1.story = {
  name: 1,
};

export const _DueDatePicker = () => (
  <div>
    <StoryItem title="Due date picker" description="+1 Day">
      <DueDatePicker
        dueDate={moment().add(1, 'day').set({ hours: 14, minutes: 15 })}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="None set">
      <DueDatePicker
        dueDate={null}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="+2 Months">
      <DueDatePicker
        dueDate={moment().add(2, 'months')}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-1 hour">
      <DueDatePicker
        dueDate={moment().subtract(1, 'hour')}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-4 Days">
      <DueDatePicker
        dueDate={moment().subtract(4, 'day')}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-4 Months">
      <DueDatePicker
        dueDate={moment().subtract(4, 'months')}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
      />
    </StoryItem>
    <StoryItem title="Due date picker" description="-4 Months (Completed)">
      <DueDatePicker
        dueDate={moment().subtract(4, 'months')}
        applyDueDate={action('applyDueDate')}
        removeDueDate={action('removeDueDate')}
        completed
      />
    </StoryItem>
  </div>
);

_DueDatePicker.story = {
  name: 'DueDatePicker',
};

export const _DueDateLabel = () => (
  <div>
    <StoryItem title="Due date label (no date)">
      <DueDateLabel />
    </StoryItem>
    <StoryItem title="Due date label (with date)">
      <DueDateLabel>3 days ago</DueDateLabel>
    </StoryItem>
    <StoryItem title="Due date label (overdue)">
      <DueDateLabel overdue>2 days ago</DueDateLabel>
    </StoryItem>
  </div>
);

_DueDateLabel.story = {
  name: 'DueDateLabel',
};
