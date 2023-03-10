import React from 'react';
import moment from 'moment';
import { DueDatePicker as DueDatePickerComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Due dates/Due Date Picker',
  component: DueDatePickerComponent,
  argTypes: {
    applyDueDate: { action: 'Due date applied' },
    removeDueDate: { action: 'Due date removed' }
  }
};

export const DueDatePicker = args => (
  <div>
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
    <StoryItem
      title="Due date picker with left header and weekends enables"
      description=""
    >
      <DueDatePickerComponent {...args} enableWeekendDays leftAlignHeader />
    </StoryItem>
  </div>
);

DueDatePicker.parameters = {
  controls: { hideNoControlsWarning: true }
};
