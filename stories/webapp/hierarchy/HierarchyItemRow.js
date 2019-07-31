import React from 'react';
import faker from 'faker';
import { ItemRow, StatusIndicator } from '../../../lib';
import { createAvatarGroup } from '../../../lib/Avatar/stories/createAvatarGroup';

const createStatusIndicator = statusColor => (
  <StatusIndicator color={statusColor} />
);

export const HierarchyItemRow = ({ statusColor }) => (
  <ItemRow
    className="h-margin-bottom-half"
    indicator={createStatusIndicator(statusColor)}
    participants={createAvatarGroup()}
    bordered
  >
    <a href="/">{faker.commerce.productName()}</a>
  </ItemRow>
);

HierarchyItemRow.propTypes = {
  statusColor: StatusIndicator.propTypes.color.isRequired
};
