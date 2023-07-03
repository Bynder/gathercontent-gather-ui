import React from "react";
import EditableChoiceInputComponent from "..";
import StoryItem from "../../../stories/styleguide/StoryItem";

export default {
  title: "Legacy/Form/Inputs/Editable Choice Input",
};

export function EditableChoiceInput() {
  return <div>
    <StoryItem
      title="EditableChoiceInputComponent"
      description="A text input next to a choice input"
    >
      {/* @ts-expect-error TS(2741): Property 'onChange' is missing in type '{ type: st... Remove this comment to see the full error message */}
      <EditableChoiceInputComponent
        type="radio"
        label="Prepopulated label"
        placeholder="Add label text"
        aside={<div>hello!</div>}
      />
    </StoryItem>
    <StoryItem
      title="EditableChoiceInputComponent"
      description="A text input next to a choice input"
    >
      {/* @ts-expect-error TS(2741): Property 'onChange' is missing in type '{ type: st... Remove this comment to see the full error message */}
      <EditableChoiceInputComponent
        type="checkbox"
        placeholder="Add label text"
      />
    </StoryItem>
  </div>
}

EditableChoiceInput.parameters = {
  controls: { hideNoControlsWarning: true },
};
