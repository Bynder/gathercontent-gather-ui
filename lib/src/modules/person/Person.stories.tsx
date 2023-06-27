import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Person as PersonComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
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
    locked: false,
    lockedTooltipText: 'im locked in!'
  }
};

export const Person = (args: any) => {
  return (
    <StoryItem title="PersonComponent" description="A person">
      <PersonComponent {...args} />
    </StoryItem>
  );
};
