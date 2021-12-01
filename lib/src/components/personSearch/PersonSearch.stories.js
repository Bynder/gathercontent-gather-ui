import React from 'react';
import faker from 'faker';
import StoryItem from 'stories/styleguide/StoryItem';
import { PersonSearch as PersonSearchComponent } from './PersonSearch';

export default {
  title: 'GUI/Person Search',
  component: PersonSearchComponent
};

export const PersonSearch = args => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
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
};

PersonSearch.parameters = {
  controls: { hideNoControlsWarning: true }
};
