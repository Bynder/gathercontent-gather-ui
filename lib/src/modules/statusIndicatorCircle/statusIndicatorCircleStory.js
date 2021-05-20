import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';
import { StatusIndicatorCircle } from './statusIndicator';

const stories = storiesOf('Modules', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Modules', module).add(
  'Status Indicator Circle',
  () => {
    const label = 'Color';
    const defaultValue = '#ff00ff';

    const value = color(label, defaultValue);
    const solid = boolean('Solid', false);
    const thickBorder = boolean('Thick Border', false);

    return (
      <StoryItem>
        <StatusIndicatorCircle
          thickBorder={thickBorder}
          solid={solid}
          color={value}
        />
      </StoryItem>
    );
  }
);

export default modalStory;
