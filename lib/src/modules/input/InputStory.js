import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { Input, InputIcon, Label } from 'lib';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { InputWithMentions } from './InputWithMentions';

const InputStory = storiesOf('Modules', module).add('Input', () => {
  const value = text('Value', '', 'base');
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
    value,
    type,
    disabled,
    invalid,
    valid,
    enhanceNativeSupport,
    required,
    size
  };

  const mockUsers = [
    {
      id: 2,
      name: 'Bruce',
      avatar:
        'https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg',
      initials: 'BB',
      display: 'brucebanner',
      email: 'bruce@bruce.com'
    },
    {
      id: 'saul',
      display: 'saulgoodman',
      name: 'Saul Goodman',
      initials: 'SG',
      email: 'heythere@lol.com'
    },
    {
      id: '456',
      display: 'jessepinkman',
      name: 'Jesse Pinkman',
      email: 'heythere@lol.com',
      initials: 'JP',
      url:
        'https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg'
    }
  ];

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

      <StoryItem title="Input (with mentions)">
        <Label htmlFor="input-3">Label</Label>
        <InputWithMentions
          users={mockUsers}
          onChange={() => {}}
          onMention={() => {}}
          id="input-3"
          placeholder="@mention your team"
          value=""
          {...additionalProps}
        />
      </StoryItem>
    </>
  );
});

export { InputStory };
