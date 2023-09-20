import React from "react";
import StoryItem from "../styleguide/StoryItem";
import { Search as SearchComponent } from "../../lib";

export default {
  title: "Legacy/Search",
  component: SearchComponent,
};

export function Search() {
  return (
    <div>
      <StoryItem
        title="SearchComponent"
        description="Components that render a search ui"
      >
        <SearchComponent>
          <SearchComponent.Input onChange={() => {}} />
          <SearchComponent.Body>
            <SearchComponent.Options>
              <SearchComponent.ToggleFilter
                label="SearchComponent all projects"
                clickHandler={() => {}}
              />
            </SearchComponent.Options>
            <SearchComponent.List heading="Items">
              <SearchComponent.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </SearchComponent.ListItem>
              <SearchComponent.ListItem title="blorp" subText="123 435">
                hhello!! <em>waffles</em> hi!
              </SearchComponent.ListItem>
            </SearchComponent.List>
            <SearchComponent.List heading="Content">
              <SearchComponent.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </SearchComponent.ListItem>
              <SearchComponent.ListItem title="blorp" subText="123 435">
                hhello!! <em>waffles</em> hi!
              </SearchComponent.ListItem>
            </SearchComponent.List>
          </SearchComponent.Body>
        </SearchComponent>
      </StoryItem>
    </div>
  );
}

Search.parameters = {
  controls: { hideNoControlsWarning: true },
};
