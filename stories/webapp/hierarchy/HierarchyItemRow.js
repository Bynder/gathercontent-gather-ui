import React from 'react';
import faker from 'faker';
import { ItemRow, StatusIndicator } from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';

const createStatusIndicator = statusColor => (
  <StatusIndicator color={statusColor} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ statusColor }) => (
  <ItemRow
    className="h-margin-bottom-half"
    bordered
    style={{ minWidth: '320px' }}
  >
    <ItemRow.Name>
      {createStatusIndicator(statusColor)}
      <a href="/">{faker.commerce.productName()}</a>
    </ItemRow.Name>

    <ItemRow.Aside>
      <ItemRow.Data>No template</ItemRow.Data>

      <AvatarGroupMock
        defaultMaxCount={8}
        avatarProps={{ smallSize: true, bordered: true }}
        avatarGroupProps={{ small: true }}
      >
        {({ ui, count }) => (count ? <ItemRow.Data>{ui}</ItemRow.Data> : null)}
      </AvatarGroupMock>
    </ItemRow.Aside>
  </ItemRow>
);

HierarchyItemRow.propTypes = {
  statusColor: StatusIndicator.propTypes.color.isRequired
};
