import React, { useState } from 'react';
import {
  AssigneeDropdown,
  Person,
  DropdownContent,
  ButtonPrimary,
  TextForm,
  Label,
  DueDateDropdown
} from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import faker from 'faker';
import moment from 'moment';
import Dropdown from '../../../Dropdown';
import { WorkflowStep } from '../../components/workflowStep/workflowStep';
import { WorkflowDropdown as WorkflowDropdownComponent } from './WorkflowDropdown';

export default {
  title: 'GUI/Workflow Dropdown',
  component: WorkflowDropdownComponent,
  args: {
    search: ''
  }
};

const WorkflowDropdownStory = ({ search, assigned, unassigned }) => {
  const workflowSteps = [
    {
      title: 'Draft',
      description:
        'Creating the initial draft of content following the project style guide and requirements for this item.',
      colour: '#F9D006'
    },
    {
      title: 'Review',
      description:
        'Content to be approved by key stakeholders. If changes are to be made, pass it back to Draft for another round.',
      colour: '#006EFF'
    },
    {
      title: 'Publish',
      description: 'Ready to be published to the CMS.',
      colour: '#6E19E6'
    },
    {
      title: 'Live',
      description: 'Successfully published to the CMS. Live!',
      colour: '#E51A2B'
    }
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const actions = (
    <WorkflowStep.Actions>
      {onActionToggle => (
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
          </AssigneeDropdown>
        </>
      )}
    </WorkflowStep.Actions>
  );

  return (
    <StoryItem title="Workflow Dropdown">
      <WorkflowDropdownComponent>
        <Dropdown.Trigger>
          {({ toggleShowContent }) => (
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
                <TextForm className="pt-4 pr-4">
                  <TextForm.Body className="pb-4">
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
};

export const WorkflowDropdown = args => {
  const getPerson = () => ({
    name: faker.name.findName(),
    subtitle: faker.internet.email(),
    avatarUrl: faker.image.avatar(),
    selected: faker.random.boolean()
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
};
