import React from 'react';
import {
  AssigneeDropdown as AssigneeDropdownComponent,
  Person,
  DropdownContent
} from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';

export default {
  title: 'GUI/Dropdowns/Assignee Dropdown',
  component: AssigneeDropdownComponent,
  args: {
    search: ''
  }
};

export const AssigneeDropdown = args => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
  });

  const assigned = [getPerson(), getPerson()];
  const unassigned = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <StoryItem
      title="AssigneeDropdownComponent"
      description="A prefab for an assignee dropdown"
    >
      <AssigneeDropdownComponent
        id="assignee-dropdown-prefab"
        searchValue={args.search}
      >
        <DropdownContent.List heading="ASSIGNED">
          {assigned.map(assignee => (
            <Person
              key={assignee.name}
              name={assignee.name}
              subtitle={assignee.subtitle}
              avatarUrl={assignee.avatarUrl}
              selected={assignee.selected}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
        <DropdownContent.List heading="UNASSIGNED">
          {unassigned.map(unassignee => (
            <Person
              key={unassignee.name}
              name={unassignee.name}
              subtitle={unassignee.subtitle}
              avatarUrl={unassignee.avatarUrl}
              selected={unassignee.selected}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
      </AssigneeDropdownComponent>
    </StoryItem>
  );
};
