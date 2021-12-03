import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import FormComponent from 'lib/Form';
import Button from 'lib/Button';
import FormInput from 'lib/Form/FormInput';
import FormFooter from 'lib/Form/FormFooter';

export default {
  title: 'Legacy/Form/Form',
  component: FormComponent
};

export const Form = () => (
  <StoryItem title="Form" description="Form with a textarea.">
    <FormComponent onSubmit={() => {}} className="form">
      <FormInput type="textarea" placeholder="Enter text here!" />

      <FormFooter>
        <Button types={['link', 'size-sm']} onClick={() => {}}>
          Cancel
        </Button>
        <Button types={['primary', 'size-sm']} isSubmit>
          Submit
        </Button>
      </FormFooter>
    </FormComponent>
  </StoryItem>
);

Form.parameters = {
  controls: { hideNoControlsWarning: true }
};
