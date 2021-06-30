import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { withKnobs } from '@storybook/addon-knobs';
import { PersonSearch } from './PersonSearch';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

stories.add('PersonSearch', () => {
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
    <>
      <StoryItem>
        <div style={{ width: '280px' }}>
          <PersonSearch
            people={people}
            label="Select a person"
            placeholder="There's placeholder too..."
          />
        </div>
      </StoryItem>
    </>
  );
});
