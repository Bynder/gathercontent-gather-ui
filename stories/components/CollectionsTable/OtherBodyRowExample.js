import React from 'react';
import { action } from '@storybook/react';
import {
  AvatarGroup,
  AvatarWithPopover,
  Icon,
  ParticipantInfo,
  StatusIndicator,
  CollectionsTable,
  Figure,
  Avatar,
} from '../../../lib';

const OtherBodyRowExample = () => (
  <CollectionsTable.Row>
    <CollectionsTable.Cell allowOverflow>
      <div className="text-overflow-ellipsis">
        <CollectionsTable.CellContent>
          <Figure
            previewSrc="https://icelanddefrosted.files.wordpress.com/2013/09/20130926-144345.jpg?w=922"
            showPreview
          />
          <h3 className="collections-table__row-title text-overflow-ellipsis">
            <a href="/">A sheep in Iceland</a>
          </h3>
        </CollectionsTable.CellContent>
      </div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">Today</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">1 MB</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="hide-small">
      <div className="text-overflow-ellipsis">
        <Avatar
          name="Angus Edwardson"
          initials="AE"
          email="example@gmail.com"
        />
      </div>
    </CollectionsTable.Cell>
  </CollectionsTable.Row>
);

export default OtherBodyRowExample;
