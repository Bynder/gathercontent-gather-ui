import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/Checkbox' or its corr... Remove this comment to see the full error message
import CheckboxComponent from 'lib/Form/Checkbox';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Checkboxes/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    onChangeHandler: { action: 'Input has changed' }
  }
};

export const Checkbox = (args: any) => <>
  <StoryItem title="Checkboxes" description="CheckboxComponent input choices">
    <CheckboxComponent
      name="ch1"
      id="id1"
      onChangeHandler={args.onChangeHandler}
      checked
      label="Ethiopian roast"
    />
    <CheckboxComponent
      name="ch1"
      onChangeHandler={args.onChangeHandler}
      id="id2"
      checked={false}
      label="Guatemala roast"
    />
    <CheckboxComponent
      name="ch1"
      id="id3"
      onChangeHandler={args.onChangeHandler}
      checked
      label="Honduras roast"
    />
  </StoryItem>

  <StoryItem
    title="Checkboxes: Disabled"
    description="CheckboxComponent input choices can be disabled. This can be achieved by passing in the disabled property."
  >
    <CheckboxComponent
      name="ch2"
      id="id21"
      disabled
      onChangeHandler={args.onChangeHandler}
      checked
      label="Ethiopian roast"
    />
    <CheckboxComponent
      name="ch2"
      disabled
      onChangeHandler={args.onChangeHandler}
      id="id22"
      checked={false}
      label="Guatemala roast"
    />
  </StoryItem>

  <StoryItem title="Checkboxes: highlighted">
    <CheckboxComponent
      name="checkbox-highlight"
      id="checkbox-highlight"
      onChangeHandler={args.onChangeHandler}
      label="Ethiopian roast"
      checked
      highlight
    />
  </StoryItem>

  <StoryItem title="Checkboxes (hinted)">
    <CheckboxComponent
      name="checkbox-hinted"
      id="checkbox-hinted"
      onChangeHandler={args.onChangeHandler}
      label="Ethiopian roast"
      checked
      hinted
    />
  </StoryItem>
</>;

Checkbox.parameters = {
  controls: { hideNoControlsWarning: true }
};
