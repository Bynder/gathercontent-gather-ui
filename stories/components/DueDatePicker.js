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
          label="Due Tommorrow at 2:15pm"
          dueDate={moment()
            .add(1, 'day')
            .set({ hours: 14, minutes: 15 })}
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
      <StoryItem title="Due date picker" description="-1 hour">
        <DueDatePicker
          label="Due Tommorrow at 12:00pm"
          dueDate={moment().subtract(1, 'hour')}
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
      <StoryItem title="Due date picker" description="-4 Months (Completed)">
        <DueDatePicker
          label="Due Tommorrow at 12:00pm"
          dueDate={moment().subtract(4, 'months')}
          setDueDate={action('setDueDate')}
          completed
        />
      </StoryItem>
    </div>
  ))
  .add('DueDateLabel', () => (
    <div>
      <StoryItem title="Due date label" description="No date">
        <DueDateLabel clickHandler={() => {}} />
      </StoryItem>
      <StoryItem title="Due date label" description="+1 Day">
        <DueDateLabel
          clickHandler={() => {}}
          dueDate={{
            date: moment()
              .add(1, 'day')
              .set({ hours: 14, minutes: 15 })
          }}
        />
      </StoryItem>
      <StoryItem title="Due date label" description="-2 Days">
        <DueDateLabel
          clickHandler={() => {}}
          dueDate={{ date: moment().subtract(2, 'day'), overdue: true }}
        />
      </StoryItem>
    </div>
  ));
