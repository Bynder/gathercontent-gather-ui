import React from 'react';
import { RadioButtonGroup } from 'lib/Form/RadioButton/Group';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Radio Buttons/Group',
  component: RadioButtonGroup,
  argTypes: {
    onChangeHandler: { action: 'Input has changed' },
    onLabelClick: { action: 'Label has been clicked' }
  }
};

export const RadioButtonsGroup = args => (
  <>
    <StoryItem
      title="Radio Input Group"
      description="The group is used to control the checked state and the text value for the other option."
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch7',
            id: 'id71',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true
          },
          {
            name: 'ch7',
            id: 'id72',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false
          }
        ]}
        onChangeHandler={args.onChangeHandler}
      />
    </StoryItem>

    <StoryItem
      title="Radio Input Group input only"
      description="A group of radio buttons where the label does not trigger onChange"
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch8',
            id: 'id81',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true
          },
          {
            name: 'ch8',
            id: 'id82',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false
          }
        ]}
        overrideLabelDefault={args.onLabelClick}
        onChangeHandler={args.onChangeHandler}
      />
    </StoryItem>

    <StoryItem
      title="Radio Input Group with other option"
      description="A group of radio buttons which also has an other option"
    >
      <RadioButtonGroup
        choices={[
          {
            name: 'ch8',
            id: '12434',
            value: 'value 1',
            label: 'Ethiopian roast',
            checked: true
          },
          {
            name: 'ch8',
            id: '12432',
            value: 'value 2',
            label: 'Guatemala roast',
            checked: false,
            other_option: true
          }
        ]}
        overrideLabelDefault={args.onLabelClick}
        onChangeHandler={args.onChangeHandler}
      />
    </StoryItem>
  </>
);

RadioButtonsGroup.parameters = {
  controls: { hideNoControlsWarning: true }
};

RadioButtonsGroup.story = {
  name: 'Group'
};
