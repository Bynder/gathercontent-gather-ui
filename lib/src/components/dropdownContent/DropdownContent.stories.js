import React from 'react';
import {
  DropdownContent as DropdownContentComponent,
  Person,
  ButtonSecondary
} from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';

export default {
  title: 'GUI/Dropdown Content',
  component: DropdownContentComponent
};

export const DropdownContent = () => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const people = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <StoryItem
      title="DropdownContentComponent"
      description="Dropdown content with a list of people"
    >
      <DropdownContentComponent>
        <DropdownContentComponent.Header title="Assignees" />
        <DropdownContentComponent.Body>
          <DropdownContentComponent.List heading="WAFFLES">
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
          </DropdownContentComponent.List>
        </DropdownContentComponent.Body>
        <DropdownContentComponent.Footer>
          <ButtonSecondary>Save</ButtonSecondary>
        </DropdownContentComponent.Footer>
      </DropdownContentComponent>
    </StoryItem>
  );
};

DropdownContent.parameters = {
  controls: { hideNoControlsWarning: true }
};
