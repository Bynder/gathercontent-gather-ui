import React from 'react';
import { action } from '@storybook/react';
import {
  AvatarGroup,
  AvatarWithPopover,
  Icon,
  ParticipantInfo,
  StatusIndicator,
  CollectionsTable,
  CollectionsFlex,
} from '../../../lib';

const BodyRowExample = () => (
  <CollectionsTable.Row>
    <CollectionsTable.Cell allowOverflow>
      <div className="text-overflow-ellipsis">
        <CollectionsTable.CellContent>
          <StatusIndicator
            color="rgb(250, 167, 50)"
            className="collections-table__status-indicator"
          />
          <h3 className="collections-table__row-title text-overflow-ellipsis">
            <a href="/">Energy Company Services</a>
          </h3>
        </CollectionsTable.CellContent>
      </div>
      <CollectionsTable.Action onClick={action('Table action')}>
        <Icon name="folder" />
      </CollectionsTable.Action>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">No template</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">Today</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">Yesterday</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <AvatarGroup maximum={3}>
        <AvatarWithPopover
          name="Angus Edwardson"
          initials="AE"
          email="example@gmail.com"
          bordered
        >
          <ParticipantInfo
            name="Angus Edwardson"
            email="example@gmail.com"
          />
        </AvatarWithPopover>
        <AvatarWithPopover
          name="Kyle Harper"
          initials="KH"
          email="example@gmail.com"
          bordered
        >
          <ParticipantInfo
            name="Kyle Harper"
            email="example@gmail.com"
          />
        </AvatarWithPopover>
      </AvatarGroup>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell>
      <div className="text-overflow-ellipsis">
        <Icon className="collections-table__icon" name="comment" text="20" />
      </div>
    </CollectionsTable.Cell>
  </CollectionsTable.Row>
);

export const FlexBodyRowExample = () => (
  <CollectionsFlex.Row>
    <CollectionsFlex.Cell>
      <div className="text-overflow-ellipsis">
        <CollectionsFlex.CellContent>
          <StatusIndicator
            color="rgb(250, 167, 50)"
            className="collections-table__status-indicator"
          />
          <h3 className="collections-table__row-title text-overflow-ellipsis">
            <a href="/">Energy Company Services</a>
          </h3>
        </CollectionsFlex.CellContent>
      </div>
    </CollectionsFlex.Cell>
    <CollectionsFlex.Cell className="hide-small">
      <div className="text-overflow-ellipsis">No template</div>
    </CollectionsFlex.Cell>
    <CollectionsFlex.Cell className="hide-small">
      <div className="text-overflow-ellipsis">Today</div>
    </CollectionsFlex.Cell>
    <CollectionsFlex.Cell className="hide-small">
      <div className="text-overflow-ellipsis">Yesterday</div>
    </CollectionsFlex.Cell>
    <CollectionsFlex.Cell className="hide-small">
      <AvatarGroup maximum={3}>
        <AvatarWithPopover
          name="Angus Edwardson"
          initials="AE"
          email="example@gmail.com"
          bordered
        >
          <ParticipantInfo
            name="Angus Edwardson"
            email="example@gmail.com"
          />
        </AvatarWithPopover>
        <AvatarWithPopover
          name="Kyle Harper"
          initials="KH"
          email="example@gmail.com"
          bordered
        >
          <ParticipantInfo
            name="Kyle Harper"
            email="example@gmail.com"
          />
        </AvatarWithPopover>
      </AvatarGroup>
    </CollectionsFlex.Cell>
    <CollectionsFlex.Cell>
      <div className="text-overflow-ellipsis">
        <Icon className="collections-table__icon" name="comment" text="20" />
      </div>
    </CollectionsFlex.Cell>
  </CollectionsFlex.Row>
)

export default BodyRowExample;
