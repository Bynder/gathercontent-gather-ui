import React from 'react';
import {
  AvatarGroup,
  AvatarWithPopover,
  Icon,
  ParticipantInfo,
  StatusIndicator,
  CollectionsTable,
} from '../../../lib';

const RowExample = () => (
  <CollectionsTable.Row>
    <CollectionsTable.Cell>
      <StatusIndicator
        className="collections__status-indicator"
        color="rgb(250, 167, 50)"
        label="Energy Company Services"
        medium
      />
    </CollectionsTable.Cell>
    <CollectionsTable.Cell>No template</CollectionsTable.Cell>
    <CollectionsTable.Cell>Today</CollectionsTable.Cell>
    <CollectionsTable.Cell>Yesterday</CollectionsTable.Cell>
    <CollectionsTable.Cell>
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
      <Icon className="collections__icon" name="comment" text="2" />
    </CollectionsTable.Cell>
  </CollectionsTable.Row>
);

export default RowExample;
