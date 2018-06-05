import React from 'react';
import { storiesOf, action } from '@storybook/react';
import moment from 'moment';
import DueDatePicker from '../../lib/DueDatePicker';
import DueDateLabel from '../../lib/DueDatePicker/DueDateLabel';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('DueDatePicker', () => (
    <div>
      <StoryItem title="Due date picker" description="+1 Day">
        <DueDatePicker
          dueDate={moment()
            .add(1, 'day')
            .set({ hours: 14, minutes: 15 })}
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
  ))
  .add('DueDateLabel', () => (
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
  ));
