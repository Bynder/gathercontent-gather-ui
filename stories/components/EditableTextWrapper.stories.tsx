import React from "react";
import { EditableTextWrapper as EditableTextWrapperComponent } from "lib";
import StoryItem from "../styleguide/StoryItem";

const longText =
  "Original text thats quite long and may well go over a single line, so its much safer to set the multiline prop, that way we render an ExpandingTextArea component instead of a normal text input";

export default {
  title: "Legacy/Form/Inputs/Editable Text Wrapper",
  component: EditableTextWrapperComponent,
  argTypes: {
    onChange: { action: "Input has changed" },
  },
};

export const EditableTextWrapper = (args: any) => (
  <div>
    <StoryItem
      title="EditableTextWrapper"
      description="Wraps text in an editable wrapper"
    >
      <EditableTextWrapperComponent
        buttonLabel="Editable text"
        value="Original text"
        onChange={args.onChange}
      >
        <h1>Original text</h1>
      </EditableTextWrapperComponent>
    </StoryItem>

    <StoryItem
      title="EditableTextWrapper pencilEditOnly"
      description="An EditableTextWrapperComponent where the edit state can only be activated by the pencil button"
    >
      <EditableTextWrapperComponent
        value="Original text"
        onChange={args.onChange}
        pencilEditOnly
      >
        <h1>Original text</h1>
      </EditableTextWrapperComponent>
    </StoryItem>

    <StoryItem
      title="EditableTextWrapper multiline"
      description="An EditableTextWrapperComponent that displays an ExpandingTextArea when in the edit state"
    >
      <EditableTextWrapperComponent
        value={longText}
        onChange={args.onChange}
        multiline
      >
        <h1>{longText}</h1>
      </EditableTextWrapperComponent>
    </StoryItem>
  </div>
);

EditableTextWrapper.parameters = {
  controls: { hideNoControlsWarning: true },
};
