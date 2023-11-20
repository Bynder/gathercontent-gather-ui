import React from "react";
import {
  CollectionsTable as CollectionsTableComponent,
  Icon,
} from "../../../lib";
import BodyRowExample from "./BodyRowExample";
import OtherBodyRowExample from "./OtherBodyRowExample";
import StoryItem from "../../styleguide/StoryItem";

export default {
  title: "Legacy/Collections Table",
  component: CollectionsTableComponent,
};

export const CollectionsTable = () => (
  <div>
    <StoryItem
      title="Collections table"
      description="Creates a table layout using flex box"
    >
      <CollectionsTableComponent>
        <CollectionsTableComponent.Row>
          <CollectionsTableComponent.Heading>
            Name
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Template
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Due Date
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Updated
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Assignees
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading>
            <Icon className="gui-collections__icon" name="comment" />
          </CollectionsTableComponent.Heading>
        </CollectionsTableComponent.Row>
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
      </CollectionsTableComponent>
    </StoryItem>

    <StoryItem
      title="Collections Table"
      description="CollectionTable with Figure content."
    >
      <CollectionsTableComponent>
        <CollectionsTableComponent.Row>
          <CollectionsTableComponent.Heading>
            Name
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Uploaded
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Size
          </CollectionsTableComponent.Heading>
          <CollectionsTableComponent.Heading className="gui-hide-small">
            Uploaded by
          </CollectionsTableComponent.Heading>
        </CollectionsTableComponent.Row>
        <OtherBodyRowExample />
        <OtherBodyRowExample />
        <OtherBodyRowExample />
      </CollectionsTableComponent>
    </StoryItem>
  </div>
);

CollectionsTable.parameters = {
  controls: { hideNoControlsWarning: true },
};
