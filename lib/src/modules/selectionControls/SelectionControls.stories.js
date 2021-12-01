import React from 'react';
import { CheckboxInput, TextForm, RadioInput } from 'lib';
import StoryItem from '../../../../stories/styleguide/StoryItem';

function SelectionControlStoryItem({ children, title }) {
  return (
    <TextForm onSubmit={() => {}} className="flex flex-col items-center px-2">
      <h4>{title}</h4>
      {children}
    </TextForm>
  );
}

export default {
  title: 'src/Selection Controls'
};

export const SelectionControls = () => {
  return (
    <>
      <StoryItem title="Checkbox">
        <div className="flex">
          <SelectionControlStoryItem title="Default">
            <CheckboxInput />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Checked">
            <CheckboxInput checked />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Disabled">
            <CheckboxInput disabled />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Disabled & checked">
            <CheckboxInput disabled checked />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Errored">
            <CheckboxInput hasError />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Errored & checked">
            <CheckboxInput hasError checked />
          </SelectionControlStoryItem>
        </div>
      </StoryItem>
      <StoryItem title="Radio">
        <div className="flex">
          <SelectionControlStoryItem title="Default">
            <RadioInput />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Checked">
            <RadioInput checked />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Disabled">
            <RadioInput disabled />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Disabled & checked">
            <RadioInput disabled checked />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Errored">
            <RadioInput hasError />
          </SelectionControlStoryItem>
          <SelectionControlStoryItem title="Errored & checked">
            <RadioInput hasError checked />
          </SelectionControlStoryItem>
        </div>
      </StoryItem>
    </>
  );
};

SelectionControls.parameters = {
  controls: { hideNoControlsWarning: true }
};
