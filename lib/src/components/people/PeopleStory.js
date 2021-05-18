import React from 'react';
import { storiesOf } from '@storybook/react';
import { People, Person, ButtonSecondary } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';

storiesOf('Components', module).add('People', () => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const people = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <StoryItem title="People" description="A list of people">
      <People>
        <People.Header title="Assignees" />
        <People.Body>
          <People.List heading="WAFFLES">
            {people.map(person => (
              <Person
                name={person.name}
                subtitle={person.subtitle}
                avatarUrl={person.avatarUrl}
                selected={person.selected}
                interactive
                bordered
              />
            ))}
          </People.List>
        </People.Body>
        <People.Footer>
          <ButtonSecondary>Save</ButtonSecondary>
        </People.Footer>
      </People>
    </StoryItem>
  );
});
