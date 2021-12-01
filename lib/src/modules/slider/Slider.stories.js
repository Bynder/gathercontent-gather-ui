import React, { useState } from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Slider as SliderComponent } from './Slider';

export default {
  title: 'src/Slider',
  component: SliderComponent
};

export const Slider = () => {
  const [value, setValue] = useState(50);
  return (
    <>
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
    </>
  );
};

Slider.parameters = {
  controls: { hideNoControlsWarning: true }
};
