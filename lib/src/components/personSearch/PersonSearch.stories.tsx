import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from 'faker';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { PersonSearch as PersonSearchComponent } from './PersonSearch';

export default {
  title: 'GUI/Person Search',
  component: PersonSearchComponent
};

export function PersonSearch(args: any) {
  const getPerson = () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const people = [
    getPerson(),
    getPerson(),
    getPerson(),
    getPerson(),
    getPerson()
  ];

  return (
    <StoryItem>
      <div style={{ width: '280px' }}>
        <PersonSearchComponent
          people={people}
          label="Select a person"
          placeholder="There's placeholder too..."
          {...args}
        />
      </div>
    </StoryItem>
  );
}

PersonSearch.parameters = {
  controls: { hideNoControlsWarning: true }
};
