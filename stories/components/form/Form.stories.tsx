import React from "react";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
// @ts-expect-error TS(2307): Cannot find module 'lib/Form' or its corresponding... Remove this comment to see the full error message
import FormComponent from "lib/Form";
// @ts-expect-error TS(2307): Cannot find module 'lib/Button' or its correspondi... Remove this comment to see the full error message
import Button from "lib/Button";
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/FormInput' or its cor... Remove this comment to see the full error message
import FormInput from "lib/Form/FormInput";
// @ts-expect-error TS(2307): Cannot find module 'lib/Form/FormFooter' or its co... Remove this comment to see the full error message
import FormFooter from "lib/Form/FormFooter";

export default {
  title: "Legacy/Form/Form",
  component: FormComponent,
};

export const Form = () => (
  <StoryItem title="Form" description="Form with a textarea.">
    <FormComponent onSubmit={() => {}} className="gui-form">
      <FormInput type="textarea" placeholder="Enter text here!" />

      <FormFooter>
        <Button types={["link", "size-sm"]} onClick={() => {}}>
          Cancel
        </Button>
        <Button types={["primary", "size-sm"]} isSubmit>
          Submit
        </Button>
      </FormFooter>
    </FormComponent>
  </StoryItem>
);

Form.parameters = {
  controls: { hideNoControlsWarning: true },
};
