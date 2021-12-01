import React from 'react';
import { CollectionsTable, Icon } from '../../../lib';
import BodyRowExample from './BodyRowExample';
import OtherBodyRowExample from './OtherBodyRowExample';
import StoryItem from '../../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _CollectionsTable = () => (
  <div>
    <StoryItem
      title="Collections table"
      description="Creates a table layout using flex box"
    >
      <CollectionsTable>
        <CollectionsTable.Row>
          <CollectionsTable.Heading>Name</CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Template
          </CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Due Date
          </CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Updated
          </CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Assignees
          </CollectionsTable.Heading>
          <CollectionsTable.Heading>
            <Icon className="collections__icon" name="comment" />
          </CollectionsTable.Heading>
        </CollectionsTable.Row>
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
        <BodyRowExample />
      </CollectionsTable>
    </StoryItem>

    <StoryItem
      title="Collections Table"
      description="CollectionTable with Figure content."
    >
      <CollectionsTable>
        <CollectionsTable.Row>
          <CollectionsTable.Heading>Name</CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Uploaded
          </CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Size
          </CollectionsTable.Heading>
          <CollectionsTable.Heading className="hide-small">
            Uploaded by
          </CollectionsTable.Heading>
        </CollectionsTable.Row>
        <OtherBodyRowExample />
        <OtherBodyRowExample />
        <OtherBodyRowExample />
      </CollectionsTable>
    </StoryItem>
  </div>
);
