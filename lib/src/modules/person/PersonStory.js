import React from 'react';
import { storiesOf } from '@storybook/react';
import { Person } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, text } from '@storybook/addon-knobs';
import faker from 'faker';

storiesOf('Components', module).add('Person', () => {
  const selected = boolean('Selected', true);
  const interactive = boolean('Interactive', false);
  const name = text('Name', faker.name.findName(), 'base');
  const subtitle = text('Subtitle', faker.internet.email(), 'base');
  const avatarUrl = text('Avatar Url', faker.image.avatar(), 'base');
  const highlight = text('Highlight Text', '');

  return (
    <StoryItem title="Person" description="A person">
      <Person
        selected={selected}
        name={name}
        subtitle={subtitle}
        avatarUrl={avatarUrl}
        interactive={interactive}
        highlightText={highlight}
      />
    </StoryItem>
  );
});
