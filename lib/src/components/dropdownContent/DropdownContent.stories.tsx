import React from "react";
import {
  DropdownContent as DropdownContentComponent,
  Person,
  ButtonSecondary,
} from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";

export default {
  title: "GUI/Dropdowns/Dropdown Content",
  component: DropdownContentComponent,
};

export function DropdownContent() {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean(),
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
            {people.map((person) => (
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
}

DropdownContent.parameters = {
  controls: { hideNoControlsWarning: true },
};
