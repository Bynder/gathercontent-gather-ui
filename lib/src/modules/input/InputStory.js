import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Input, InputIcon, Label } from 'lib';
import { boolean, radios } from '@storybook/addon-knobs';

const InputStory = storiesOf('Modules', module).add('Input', () => {
  const disabled = boolean('Disabled', false, 'base');
  const invalid = boolean('Invalid', false, 'base');
  const valid = boolean('Valid', false, 'base');

  const type = radios(
    'Type',
    {
      text: 'text',
      email: 'email',
      password: 'password',
      number: 'number'
    },
    'text',
    'base'
  );

  const size = radios(
    'Size',
    {
      text: 'md',
      email: 'sm'
    },
    'md',
    'base'
  );

  const enhanceNativeSupport = boolean(
    'Enhance native support',
    false,
    'Native'
  );
  const required = boolean('required', null, 'Native');

  const additionalProps = {
    type,
    disabled,
    invalid,
    valid,
    enhanceNativeSupport,
    required,
    size
  };

  return (
    <>
      <StoryItem title="Input">
        <Label htmlFor="input-1">Label</Label>
        <Input
          id="input-1"
          placeholder="Describe this input..."
          {...additionalProps}
        />
      </StoryItem>

      <StoryItem title="Input (with an icon)">
        <Label htmlFor="input-2">Label</Label>
        <InputIcon
          id="input-2"
          placeholder="Describe this input..."
          iconName="search"
          {...additionalProps}
        />
      </StoryItem>
    </>
  );
});

export { InputStory };
