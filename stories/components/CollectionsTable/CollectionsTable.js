import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollectionsTable, Icon, CollectionsFlex } from '../../../lib';
import BodyRowExample, { FlexBodyRowExample } from './BodyRowExample';
import OtherBodyRowExample from './OtherBodyRowExample';
import StoryItem from '../../styleguide/StoryItem';

storiesOf('Components', module).add('Collections Table', () => (
  <div>
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
              Uploaded
            </CollectionsTable.Heading>
            <CollectionsTable.Heading className="hide-small">
              Size
            </CollectionsTable.Heading>
            <CollectionsTable.Heading className="hide-small">
              Uploaded by
            </CollectionsTable.Heading>
          </CollectionsTable.Row>
        </CollectionsTable.Head>

        <CollectionsTable.Body>
          <OtherBodyRowExample />
        </CollectionsTable.Body>
      </CollectionsTable>
    </div>
    </StoryItem>
  <StoryItem
    title="flex table"
    description="bla"
  >
    <CollectionsFlex>
      <CollectionsFlex.Row>
        <CollectionsFlex.Heading>Name</CollectionsFlex.Heading>
        <CollectionsFlex.Heading className="hide-small">
          Template
        </CollectionsFlex.Heading>
        <CollectionsFlex.Heading className="hide-small">
          Due Date
        </CollectionsFlex.Heading>
        <CollectionsFlex.Heading className="hide-small">
          Updated
        </CollectionsFlex.Heading>
        <CollectionsFlex.Heading className="hide-small">
          Assignees
        </CollectionsFlex.Heading>
        <CollectionsFlex.Heading>
          <Icon className="collections__icon" name="comment" />
        </CollectionsFlex.Heading>
      </CollectionsFlex.Row>
      <FlexBodyRowExample />
      <FlexBodyRowExample />
      <FlexBodyRowExample />
      <FlexBodyRowExample />
      <FlexBodyRowExample />
    </CollectionsFlex>
  </StoryItem>
  </div>
));
