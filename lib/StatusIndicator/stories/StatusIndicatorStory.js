import React from 'react';
import { text, color, boolean } from '@storybook/addon-knobs';
import StatusIndicator from '..';
// eslint-disable-next-line import/no-named-as-default
import DueDatePicker from '../../DueDatePicker';
import Button from '../../Button';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _StatusIndicator = () => {
  const label = text('label', 'Editing');
  const statusColor = color('color', 'rgb(250, 167, 50)');
  const current = boolean('current', false);
  const circleLarge = boolean('circleLarge', false);
  const medium = boolean('medium', false);
  const approved = boolean('approved', false);
  const action = boolean('action', true);
  const row = boolean('row', false);
  const small = boolean('small', false);
  const softLabel = boolean('softLabel', false);
  const readOnly = boolean('readOnly', false);
  const bordered = boolean('bordered', false);
  const completed = boolean('completed', false);

  return (
    <div>
      <StoryItem
        title="Status Indicator"
        description="Indicator for the workflow status"
      >
        <StatusIndicator
          color={statusColor}
          label={label}
          current={current}
          circleLarge={circleLarge}
          medium={medium}
          approved={approved}
          row={row}
          small={small}
          softLabel={softLabel}
          readOnly={readOnly}
          bordered={bordered}
          completed={completed}
          description="Edits to be made in response to user testing and the feedback from the senior editor and subject matter expert."
          actions={
            action ? (
              <Button types={['primary']} clickHandler={() => {}}>
                Test Button
              </Button>
            ) : null
          }
        >
          <DueDatePicker applyDueDate={() => {}} removeDueDate={() => {}}>
            Due Tommorrow at 12:00pm
          </DueDatePicker>
        </StatusIndicator>
      </StoryItem>

      <StoryItem description="Rowed and soft labeled">
        <StatusIndicator color="#93724f" label="Draft" row softLabel>
          <DueDatePicker
            applyDueDate={() => {}}
            removeDueDate={() => {}}
            autoPosition
            row
          >
            20th Feb 2019
          </DueDatePicker>
        </StatusIndicator>
        <StatusIndicator color="green" label="Publishing" row softLabel>
          <DueDatePicker
            applyDueDate={() => {}}
            removeDueDate={() => {}}
            autoPosition
            row
          >
            20th Feb 2019
          </DueDatePicker>
        </StatusIndicator>
      </StoryItem>
    </div>
  );
};

_StatusIndicator.story = {
  name: 'StatusIndicator',
};
