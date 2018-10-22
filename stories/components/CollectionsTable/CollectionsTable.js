import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollectionsTable, Icon } from '../../../lib';
import BodyRowExample from './BodyRowExample';
import StoryItem from '../../styleguide/StoryItem';

storiesOf('Components', module).add('Collections Table', () => (
  <StoryItem
    title="Collections Table"
    description="A wrapper around tables to provide enhanced styling."
  >
    <div style={{ paddingLeft: '20px' }}>
      <CollectionsTable>
        <CollectionsTable.Head>
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
        </CollectionsTable.Head>

        <CollectionsTable.Body>
          <BodyRowExample />

          <CollectionsTable.Row>
            <CollectionsTable.Cell colSpan={6} allowOverflow>
              <CollectionsTable>
                <CollectionsTable.Body>
                  <BodyRowExample />
                  <BodyRowExample />
                  <BodyRowExample />
                </CollectionsTable.Body>
              </CollectionsTable>
            </CollectionsTable.Cell>
          </CollectionsTable.Row>
        </CollectionsTable.Body>
      </CollectionsTable>
    </div>
  </StoryItem>
));
