import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import FormInputComponent from 'lib/Form/FormInput';

export default {
  title: 'Legacy/Form/Inputs/Form Input',
  component: FormInputComponent
};

export const FormInput = () => (
  <div>
    <StoryItem title="FormInputComponent">
      <FormInputComponent id="form-input" placeholder="Add some text~" />
    </StoryItem>
    <StoryItem title="FormInputComponent full width">
      <FormInputComponent id="form-input" placeholder="Loooong" fullWidth />
    </StoryItem>
    <StoryItem title="FormInputComponent with error">
      <FormInputComponent
        id="form-input"
        placeholder="Uh oh"
        hasError
        errorMessage="Something went wrong"
      />
    </StoryItem>
  </div>
);

FormInput.parameters = {
  controls: { hideNoControlsWarning: true }
};
