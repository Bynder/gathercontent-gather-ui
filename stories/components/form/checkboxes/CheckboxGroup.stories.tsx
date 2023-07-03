import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/Checkbox/Group' or it... Remove this comment to see the full error message
import { CheckboxGroup as CheckboxGroupComponent } from 'lib/Form/Checkbox/Group';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Checkboxes/Group',
  component: CheckboxGroupComponent,
  argTypes: {
    onChangeHandler: { action: 'Input has changed' },
    onLabelClick: { action: 'Label has been clicked' }
  }
};

export const CheckboxGroup = (args: any) => <>
  <StoryItem
    title="Checkboxes: in a CheckboxGroup"
    description="Checkbox input choices can be controlled in a CheckboxGroup"
  >
    <CheckboxGroupComponent
      choices={[
        {
          name: 'ch3',
          id: 'id31',
          checked: true,
          label: 'Ethiopian roast'
        },
        {
          name: 'ch3',
          id: 'id32',
          checked: true,
          label: 'Guatemala roast'
        }
      ]}
      onChangeHandler={args.onChangeHandler}
    />
  </StoryItem>

  <StoryItem
    title="Checkboxes: input only"
    description="Checkboxes where the label does not trigger onChange"
  >
    <CheckboxGroupComponent
      choices={[
        {
          name: 'ch4',
          id: 'id41',
          checked: true,
          label: 'Ethiopian roast'
        },
        {
          name: 'ch4',
          id: 'id42',
          checked: true,
          label: 'Guatemala roast'
        }
      ]}
      onChangeHandler={args.onChangeHandler}
      overrideLabelDefault={args.onLabelClick}
    />
  </StoryItem>

  <StoryItem title="Checkboxes in a group: highlighted">
    <CheckboxGroupComponent
      choices={[
        {
          name: 'ch9',
          id: 'id91',
          checked: true,
          label: 'Ethiopian roast',
          highlight: true
        },
        {
          name: 'ch9',
          id: 'id92',
          checked: true,
          label: 'Guatemala roast',
          highlight: true
        }
      ]}
      onChangeHandler={args.onChangeHandler}
    />
  </StoryItem>
</>;

CheckboxGroup.parameters = {
  controls: { hideNoControlsWarning: true }
};
CheckboxGroup.story = {
  name: 'Group'
};
