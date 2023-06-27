import React from 'react';
import StatusIndicatorComponent from '..';
// eslint-disable-next-line import/no-named-as-default
import DueDatePicker from '../../DueDatePicker';
import Button from '../../Button';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Status Indicator',
  component: StatusIndicatorComponent,
  args: {
    label: 'Editing',
    current: false,
    circleLarge: false,
    medium: false,
    approved: false,
    action: false,
    row: false,
    small: false,
    softLabel: false,
    readOnly: false,
    bordered: false,
    completed: false,
    color: 'rgb(250, 167, 50)'
  },
  argTypes: {
    color: {
      name: 'Colour',
      control: { type: 'color' }
    }
  }
};

export const StatusIndicator = args => {
  return (
    <div>
      <StoryItem
        title="Status Indicator"
        description="Indicator for the workflow status"
      >
        <StatusIndicatorComponent
          description="Edits to be made in response to user testing and the feedback from the senior editor and subject matter expert."
          {...args}
          actions={
            args.action ? (
              <Button types={['primary']} clickHandler={() => {}}>
                Test Button
              </Button>
            ) : null
          }
        >
          <DueDatePicker applyDueDate={() => {}} removeDueDate={() => {}}>
            Due Tommorrow at 12:00pm
          </DueDatePicker>
        </StatusIndicatorComponent>
      </StoryItem>

      <StoryItem description="Rowed and soft labeled">
        <StatusIndicatorComponent color="#93724f" label="Draft" row softLabel>
          <DueDatePicker
            applyDueDate={() => {}}
            removeDueDate={() => {}}
            autoPosition
            row
          >
            20th Feb 2019
          </DueDatePicker>
        </StatusIndicatorComponent>
        <StatusIndicatorComponent
          color="green"
          label="Publishing"
          row
          softLabel
        >
          <DueDatePicker
            applyDueDate={() => {}}
            removeDueDate={() => {}}
            autoPosition
            row
          >
            20th Feb 2019
          </DueDatePicker>
        </StatusIndicatorComponent>
      </StoryItem>
    </div>
  );
};
