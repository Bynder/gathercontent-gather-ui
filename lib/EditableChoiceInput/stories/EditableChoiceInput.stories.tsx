import React from "react";
import EditableChoiceInputComponent from "..";
import StoryItem from "../../../stories/styleguide/StoryItem";

export default {
  title: "Legacy/Form/Inputs/Editable Choice Input",
};

export function EditableChoiceInput() {
  return (
    <div>
      <StoryItem
        title="EditableChoiceInputComponent"
        description="A text input next to a choice input"
      >
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
        <EditableChoiceInputComponent
          type="checkbox"
          placeholder="Add label text"
        />
      </StoryItem>
    </div>
  );
}

EditableChoiceInput.parameters = {
  controls: { hideNoControlsWarning: true },
};
