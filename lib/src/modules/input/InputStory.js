import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Input, InputIcon, Label } from 'lib';

const InputStory = storiesOf('Modules', module).add('Input', () => {
  return (
    <>
      <StoryItem title="Input">
        <Label htmlFor="input-1">Label</Label>
        <Input id="input-1" placeholder="Describe this input..." />
      </StoryItem>

      <StoryItem title="Input (with an icon)">
        <Label htmlFor="input-2">Label</Label>
        <InputIcon
          id="input-2"
          placeholder="Describe this input..."
          iconName="search"
        />
      </StoryItem>
    </>
  );
});

export { InputStory };
