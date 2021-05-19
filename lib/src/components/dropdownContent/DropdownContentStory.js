import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownContent, Person, ButtonSecondary } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';

storiesOf('Components', module).add('DropdownContent', () => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const people = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <StoryItem
      title="DropdownContent"
      description="Dropdown content with a list of people"
    >
      <DropdownContent>
        <DropdownContent.Header title="Assignees" />
        <DropdownContent.Body>
          <DropdownContent.List heading="WAFFLES">
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
          </DropdownContent.List>
        </DropdownContent.Body>
        <DropdownContent.Footer>
          <ButtonSecondary>Save</ButtonSecondary>
        </DropdownContent.Footer>
      </DropdownContent>
    </StoryItem>
  );
});
