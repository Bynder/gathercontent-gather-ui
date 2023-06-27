import React from 'react';
import CheckboxComponent from 'lib/Form/Checkbox';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Form/Checkboxes/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    onChangeHandler: { action: 'Input has changed' }
  }
};

export const Checkbox = args => (
  <>
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
  </>
);

Checkbox.parameters = {
  controls: { hideNoControlsWarning: true }
};
