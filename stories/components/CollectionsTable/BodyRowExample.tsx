import React from "react";
// @ts-expect-error TS(2305): Module '"@storybook/react"' has no exported member... Remove this comment to see the full error message
import { action } from "@storybook/react";
import {
  AvatarGroup,
  AvatarWithPopover,
  Icon,
  ParticipantInfo,
  StatusIndicator,
  CollectionsTable,
} from "lib";

const BodyRowExample = () => (
  <CollectionsTable.Row>
    <CollectionsTable.Cell>
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
          <ParticipantInfo name="Angus Edwardson" email="example@gmail.com" />
        </AvatarWithPopover>
        <AvatarWithPopover
          name="Kyle Harper"
          initials="KH"
          email="example@gmail.com"
          bordered
        >
          <ParticipantInfo name="Kyle Harper" email="example@gmail.com" />
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

export default BodyRowExample;
