import React from "react";
import {
  AssigneeDropdown as AssigneeDropdownComponent,
  DropdownContent,
  Person,
} from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";

export default {
  title: "GUI/Dropdowns/Assignee Dropdown",
  component: AssigneeDropdownComponent,
  args: {
    search: "",
  },
};

export function AssigneeDropdown(args: any) {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean(),
    pending: false,
  });

  const assigned = [
    { ...getPerson(), pending: true },
    getPerson(),
    getPerson(),
  ];
  const unassigned = [
    { ...getPerson(), pending: true },
    getPerson(),
    getPerson(),
    getPerson(),
    getPerson(),
  ];

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
          {assigned.map((assignee) => (
            <Person
              key={assignee.name}
              name={assignee.name}
              subtitle={assignee.subtitle}
              avatarUrl={assignee.avatarUrl}
              selected={assignee.selected}
              pending={assignee.pending}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
        <DropdownContent.List heading="UNASSIGNED">
          {unassigned.map((unassignee) => (
            <Person
              key={unassignee.name}
              name={unassignee.name}
              subtitle={unassignee.subtitle}
              avatarUrl={unassignee.avatarUrl}
              selected={unassignee.selected}
              pending={unassignee.pending}
              interactive
              bordered
            />
          ))}
        </DropdownContent.List>
      </AssigneeDropdownComponent>
    </StoryItem>
  );
}
