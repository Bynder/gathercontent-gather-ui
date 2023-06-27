import React from 'react';
import moment from 'moment';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { DueDatePicker as DueDatePickerComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Due dates/Due Date Picker',
  component: DueDatePickerComponent,
  argTypes: {
    applyDueDate: { action: 'Due date applied' },
    removeDueDate: { action: 'Due date removed' }
  }
};

export const DueDatePicker = (args: any) => <div>
  <StoryItem title="Due date picker" description="+1 Day">
    <DueDatePickerComponent
      dueDate={moment()
        .add(1, 'day')
        .set({ hours: 14, minutes: 15 })}
      {...args}
    />
  </StoryItem>
  <StoryItem title="Due date picker" description="None set">
    <DueDatePickerComponent dueDate={null} {...args} />
  </StoryItem>
  <StoryItem title="Due date picker" description="+2 Months">
    <DueDatePickerComponent dueDate={moment().add(2, 'months')} {...args} />
  </StoryItem>
  <StoryItem title="Due date picker" description="-1 hour">
    <DueDatePickerComponent
      dueDate={moment().subtract(1, 'hour')}
      {...args}
    />
  </StoryItem>
  <StoryItem title="Due date picker" description="-4 Days">
    <DueDatePickerComponent dueDate={moment().subtract(4, 'day')} {...args} />
  </StoryItem>
  <StoryItem title="Due date picker" description="-4 Months">
    <DueDatePickerComponent
      dueDate={moment().subtract(4, 'months')}
      {...args}
    />
  </StoryItem>
  <StoryItem title="Due date picker" description="-4 Months (Completed)">
    <DueDatePickerComponent
      dueDate={moment().subtract(4, 'months')}
      {...args}
      completed
    />
  </StoryItem>
</div>;

DueDatePicker.parameters = {
  controls: { hideNoControlsWarning: true }
};
