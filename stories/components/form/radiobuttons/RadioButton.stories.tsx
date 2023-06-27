import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/RadioButton' or its c... Remove this comment to see the full error message
import RadioButtonComponent from 'lib/Form/RadioButton';
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/RadioButton/Other' or... Remove this comment to see the full error message
import RadioButtonOther from 'lib/Form/RadioButton/Other';

export default {
  title: 'Legacy/Form/Radio Buttons/Radio Button',
  component: RadioButtonComponent,
  argTypes: {
    onChangeHandler: { action: 'Input has changed' },
    onTextChangeHandler: { action: 'Text has changed' }
  }
};

export const RadioButton = (args: any) => <>
  <StoryItem title="Radio Input" description="Base styling for RadioInputs.">
    <RadioButtonComponent
      name="ch1"
      id="id1"
      value="value 1"
      checked={false}
      onChangeHandler={args.onChangeHandler}
      label="Option label"
    />
  </StoryItem>

  <StoryItem
    title="Radio Input (checked)"
    description="Inputs can have a checked state."
  >
    <RadioButtonComponent
      name="ch2"
      id="id2"
      value="value 2"
      onChangeHandler={args.onChangeHandler}
      label="Option label"
      checked
    />
  </StoryItem>

  <StoryItem
    title="Radio Input (disabled)"
    description="Inputs can be disabled, which prevents all callbacks from being executed."
  >
    <RadioButtonComponent
      name="ch3"
      id="id3"
      value="value 3"
      onChangeHandler={args.onChangeHandler}
      label="Option label"
      checked={false}
      disabled
    />
  </StoryItem>

  <StoryItem
    title="Radio Input (label with subtitle)"
    description="A label can have a subtitle."
  >
    <RadioButtonComponent
      name="ch4"
      id="id4"
      value="value 1"
      onChangeHandler={args.onChangeHandler}
      label="Option label"
      subtitle="label subtext"
      checked
    />
  </StoryItem>

  <StoryItem title="Radio Input (highlighted)">
    <RadioButtonComponent
      name="highlighted"
      id="id-highlighted"
      value="value 1"
      onChangeHandler={args.onChangeHandler}
      label="Option label"
      subtitle="label subtext"
      checked
      highlight
    />
  </StoryItem>

  <StoryItem title="Radio Input (hinted)">
    <RadioButtonComponent
      name="hinted"
      id="id-hinted"
      value="value 1"
      onChangeHandler={args.onChangeHandler}
      label="Option label 1"
      checked={false}
      hinted
    />
  </StoryItem>

  <StoryItem
    title="Radio Input (other option)"
    description="Inputs can have a user-provided value."
  >
    <RadioButtonOther
      name="ch5"
      id="id5"
      label="Option label"
      value="5"
      checked={false}
      onChangeHandler={args.onChangeHandler}
      onTextChangeHandler={args.onTextChangeHandler}
      other_option
    />

    <p>The other option when checked shows an input.</p>

    <RadioButtonOther
      name="ch5"
      id="id5"
      label="Option label"
      value="5"
      onChangeHandler={args.onChangeHandler}
      onTextChangeHandler={args.onTextChangeHandler}
      other_option
      checked
    />
  </StoryItem>
</>;

RadioButton.parameters = {
  controls: { hideNoControlsWarning: true }
};
