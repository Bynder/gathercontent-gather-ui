import React from 'react';
import { storiesOf } from '@storybook/react';
import { DateSet } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { date, text } from '@storybook/addon-knobs';

storiesOf('Components', module).add('DateSet', () => {
  const displayDate = date('Date');
  const subtext = text('Subtext', 'Some optional extra text.');

  return (
    <StoryItem title="DateSet" description="Display a date and a time selector">
      <div>
        <DateSet date={displayDate} subtext={subtext} />
      </div>
    </StoryItem>
  );
});
