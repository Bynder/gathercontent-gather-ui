import React from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenuItem } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, text } from '@storybook/addon-knobs';

const stories = storiesOf('Modules', module);

stories.add('OptionMenuItem', () => {
  const danger = boolean('Danger', false);
  const active = boolean('Active', false);
  const optionText = text('Option text', 'An option menu');
  const metaText = text('Meta', 'Flub');

  return (
    <>
      <StoryItem title="OptionMenuItem">
        <OptionMenuItem danger={danger} active={active} meta={metaText}>
          {optionText}
        </OptionMenuItem>
      </StoryItem>
    </>
  );
});
