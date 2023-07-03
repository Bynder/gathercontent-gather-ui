import React, { useState } from "react";
import {
  AssigneeDropdown,
  Person,
  DropdownContent,
  ButtonPrimary,
  TextForm,
  Label,
  DueDateDropdown,
} from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";
import moment from "moment";
import Dropdown from "../../../Dropdown";
import { WorkflowStep } from "../../components/workflowStep/workflowStep";
import { WorkflowDropdown as WorkflowDropdownComponent } from "./WorkflowDropdown";

export default {
  title: "GUI/Dropdowns/Workflow Dropdown",
  component: WorkflowDropdownComponent,
  args: {
    search: "",
  },
};

function WorkflowDropdownStory({ search, assigned, unassigned }: any) {
  const workflowSteps = [
    {
      title: "Draft",
      description:
        "Creating the initial draft of content following the project style guide and requirements for this item.",
      colour: "#F9D006",
    },
    {
      title: "Review",
      description:
        "Content to be approved by key stakeholders. If changes are to be made, pass it back to Draft for another round.",
      colour: "#006EFF",
    },
    {
      title: "Publish",
      description: "Ready to be published to the CMS.",
      colour: "#6E19E6",
    },
    {
      title: "Live",
      description: "Successfully published to the CMS. Live!",
      colour: "#E51A2B",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const actions = (
    <WorkflowStep.Actions>
      {(onActionToggle: any) => (
        <>
          <DueDateDropdown
            id="due-date-dropdown"
            selectedDay={moment().toDate()}
            onToggle={onActionToggle}
          />
          <AssigneeDropdown
            id="assignee-dropdown"
            searchValue={search}
            onToggle={onActionToggle}
          >
            <DropdownContent.List heading="ASSIGNED">
              {assigned.map((assignee: any) => (
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
              {unassigned.map((unassignee: any) => (
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
          </AssigneeDropdown>
        </>
      )}
    </WorkflowStep.Actions>
  );

  return (
    <StoryItem title="Workflow Dropdown">
      <WorkflowDropdownComponent>
        <Dropdown.Trigger>
          {({ toggleShowContent }: any) => (
            <ButtonPrimary onClick={toggleShowContent}>
              Open Dropdown
            </ButtonPrimary>
          )}
        </Dropdown.Trigger>
        <WorkflowDropdownComponent.Content>
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.title}
              className="w-full h-full border border-solid border-neutral-90"
              showBody={selectedIndex === index}
              isActive={activeIndex === index}
              // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
              onClick={() => setSelectedIndex(index)}
            >
              <WorkflowStep.Header>
                <WorkflowStep.Title statusColour={step.colour}>
                  {step.title}
                </WorkflowStep.Title>
                <WorkflowStep.Meta actions={actions}>Meta</WorkflowStep.Meta>
              </WorkflowStep.Header>
              <WorkflowStep.CollapsibleBody>
                <p className="text-neutral-primary text-base pt-2">
                  {step.description}
                </p>
                {/* @ts-expect-error */}
                <TextForm className="pt-4 pr-4">
                  <TextForm.Body className="pb-4">
                    {/* @ts-expect-error */}
                    <Label htmlFor="test">
                      leave a Note
                      <span className="text-neutral-primary">(OPTIONAL)</span>
                    </Label>
                    <TextForm.Input id="test" />
                  </TextForm.Body>
                  <TextForm.Submission>
                    <TextForm.SubmitButton
                      onClick={() => setActiveIndex(index)}
                      size="sm"
                    >
                      Set Status
                    </TextForm.SubmitButton>
                  </TextForm.Submission>
                </TextForm>
              </WorkflowStep.CollapsibleBody>
            </WorkflowStep>
          ))}
        </WorkflowDropdownComponent.Content>
      </WorkflowDropdownComponent>
    </StoryItem>
  );
}

export function WorkflowDropdown(args: any) {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean(),
  });

  const assigned = [getPerson(), getPerson()];
  const unassigned = [getPerson(), getPerson(), getPerson(), getPerson()];

  return (
    <WorkflowDropdownStory
      assigned={assigned}
      unassigned={unassigned}
      {...args}
    />
  );
}
