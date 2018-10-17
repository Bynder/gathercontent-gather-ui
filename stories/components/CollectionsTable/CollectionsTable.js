import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollectionsTable, Icon } from '../../../lib';
import RowExample from './RowExample';
import StoryItem from '../../styleguide/StoryItem';

storiesOf('Components', module).add('Collections Table', () => (
  <div>
    <StoryItem
      title="Collections Table"
      description="A wrapper around tables to provide enhanced styling."
    >
      <CollectionsTable>
        <CollectionsTable.Head>
          <CollectionsTable.Row>
            <CollectionsTable.Heading>Name</CollectionsTable.Heading>
            <CollectionsTable.Heading>Template</CollectionsTable.Heading>
            <CollectionsTable.Heading>Due Date</CollectionsTable.Heading>
            <CollectionsTable.Heading>Updated</CollectionsTable.Heading>
            <CollectionsTable.Heading>Assignees</CollectionsTable.Heading>
            <CollectionsTable.Heading>
              <Icon className="collections__icon" name="comment" />
            </CollectionsTable.Heading>
          </CollectionsTable.Row>
        </CollectionsTable.Head>

        <CollectionsTable.Body>
          <RowExample />
          <RowExample />
          <RowExample />
          <RowExample />
          <CollectionsTable.Row>
            <CollectionsTable.Cell
              colSpan={6}
              className="collections__children-wrapper"
            >
              <CollectionsTable>
                <CollectionsTable.Body>
                  <RowExample />
                  <RowExample />
                  <RowExample />
                  <RowExample />
                </CollectionsTable.Body>
              </CollectionsTable>
            </CollectionsTable.Cell>
          </CollectionsTable.Row>
        </CollectionsTable.Body>
      </CollectionsTable>
    </StoryItem>
  </div>
));
