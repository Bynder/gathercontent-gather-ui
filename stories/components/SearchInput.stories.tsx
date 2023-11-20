import React from "react";
import SearchInputComponent from "../../lib/SearchInput";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Form/Inputs/Search Input",
  component: SearchInputComponent,
  args: {
    value: "",
    id: "search-input",
    label: "Seach",
  },
  argTypes: {
    onChangeHandler: { action: "Input has changed" },
    onClearHandler: { action: "Input has been cleared" },
  },
};

export const SearchInput = (args: any) => (
  <div>
    <StoryItem
      title="Search field"
      description="An input that contains behaviour for live search capabilities."
    >
      <div className="flex">
        <SearchInputComponent {...args} />
      </div>
    </StoryItem>
    <StoryItem
      title="Search field with an initial value"
      description="Use the `initialValue` prop to set an initial value "
    >
      <SearchInputComponent {...args} initialValue="foo" />
    </StoryItem>
  </div>
);
