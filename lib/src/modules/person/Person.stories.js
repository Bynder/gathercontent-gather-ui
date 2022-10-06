import React from 'react';
import { Person as PersonComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';

export default {
  title: 'GUI/Person',
  component: PersonComponent,
  args: {
    selected: true,
    interactive: false,
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    highlightText: 'Highlight text',
    locked: false
  }
};

export const Person = args => {
  return (
    <StoryItem title="PersonComponent" description="A person">
      <PersonComponent {...args} />
    </StoryItem>
  );
};
