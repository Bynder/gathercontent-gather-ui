import React, { useState } from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { Slider as SliderComponent } from './Slider';

export default {
  title: 'GUI/Form/Inputs/Slider',
  component: SliderComponent
};

export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <StoryItem
        title="SliderComponent"
        description="An input type='range' styled nicely. Takes a children prop to allow the value to be displayed depending on what the slider is controlling."
      >
        <SliderComponent
          value={+value}
          onChange={e => setValue(e.target.value)}
        >
          <p>{value}</p>
        </SliderComponent>
      </StoryItem>
  );
}

Slider.parameters = {
  controls: { hideNoControlsWarning: true }
};
