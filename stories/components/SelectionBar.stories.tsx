import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'plur... Remove this comment to see the full error message
import pluralize from "pluralize";
import { SelectionBar as SelectionBarComponent, Button, Icon } from "../../lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Selection Bar",
  component: SelectionBarComponent,
};

export function SelectionBar() {
  const example1selectedIds = [1, 2, 3];
  const example2selectedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const type = "items";

  return (
    <div>
      <StoryItem title="SelectionBarComponent">
        <SelectionBarComponent hasSelected={example1selectedIds.length}>
          <SelectionBarComponent.Information>
            <Button
              clickHandler={() => {}}
              types={["link-default"]}
              className="gui-selection-bar__all"
            >
              Select all
            </Button>
            <span className="gui-selection-bar__count">
              {example1selectedIds.length}
            </span>
            <span className="gui-selection-bar__type">
              {pluralize(type, example1selectedIds.length)} selected
            </span>
          </SelectionBarComponent.Information>
          <SelectionBarComponent.Actions>
            <SelectionBarComponent.Action>
              <Button clickHandler={() => {}} types={["icon-only"]}>
                <Icon name="download" />
              </Button>
            </SelectionBarComponent.Action>
            <SelectionBarComponent.Action>
              <Button clickHandler={() => {}} types={["icon-only"]}>
                <Icon name="trash" />
              </Button>
            </SelectionBarComponent.Action>
          </SelectionBarComponent.Actions>
        </SelectionBarComponent>
      </StoryItem>

      <StoryItem
        title="SelectionBarComponent"
        description="fixed SelectionBarComponent"
      >
        <SelectionBarComponent hasSelected={example2selectedIds.length} fixed>
          <SelectionBarComponent.Information>
            <Button
              clickHandler={() => {}}
              types={["link-default"]}
              className="gui-selection-bar__all"
            >
              Select all
            </Button>
            <span className="gui-selection-bar__count">
              {example2selectedIds.length}
            </span>
            <span className="gui-selection-bar__type">
              {pluralize(type, example2selectedIds.length)} selected
            </span>
          </SelectionBarComponent.Information>
          <SelectionBarComponent.Actions>
            <SelectionBarComponent.Action>
              <Button clickHandler={() => {}} types={["icon-only"]}>
                <Icon name="files" />
              </Button>
            </SelectionBarComponent.Action>
            <SelectionBarComponent.Action>
              <Button clickHandler={() => {}} types={["icon-only"]}>
                <Icon name="save" />
              </Button>
            </SelectionBarComponent.Action>
            <SelectionBarComponent.Action>
              <Button clickHandler={() => {}} types={["icon-only"]}>
                <Icon name="export" />
              </Button>
            </SelectionBarComponent.Action>
          </SelectionBarComponent.Actions>
        </SelectionBarComponent>
      </StoryItem>
    </div>
  );
}

SelectionBar.parameters = {
  controls: { hideNoControlsWarning: true },
};
