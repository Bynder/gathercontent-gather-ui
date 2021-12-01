import React from 'react';
import { DateSet as DateSetComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'src/Date Set',
  components: DateSetComponent,
  args: {
    subtext: 'Some optional extra text.',
    date: 1639180800000
  },
  argTypes: {
    date: {
      name: 'Date',
      control: { type: 'date' }
    }
  }
};

export const DateSet = args => {
  return (
    <StoryItem
      title="DateSetComponent"
      description="Display a date and a time selector"
    >
      <div>
        <DateSetComponent {...args} />
      </div>
    </StoryItem>
  );
};
