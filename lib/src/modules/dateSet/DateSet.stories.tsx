import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { DateSet as DateSetComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Date Set',
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

export const DateSet = (args: any) => {
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
