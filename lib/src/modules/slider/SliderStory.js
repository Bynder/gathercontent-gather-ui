import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Slider } from './Slider';

const stories = storiesOf('Modules', module);

stories.add('Slider', () => {
  const [value, setValue] = useState(50);
  return (
    <>
      <StoryItem
        title="Slider"
        description="An input type='range' styled nicely. Takes a children prop to allow the value to be displayed depending on what the slider is controlling."
      >
        <Slider value={+value} onChange={e => setValue(e.target.value)}>
          <p>{value}</p>
        </Slider>
      </StoryItem>
    </>
  );
});
