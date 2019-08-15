import React from 'react';
import { action } from '@storybook/addon-actions';
import { string } from 'prop-types';
import { ItemRow, StatusIndicator, EditableTextWrapper } from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';

const createStatusIndicator = status => (
  <StatusIndicator color={status.color} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ name, status }) => (
  <ItemRow
    className="h-margin-bottom-half"
    bordered
    style={{ minWidth: '320px' }}
  >
    <ItemRow.Name>
      {createStatusIndicator(status)}
      <EditableTextWrapper
        value={name}
        className="h-margin-clear"
        onChange={action('Item name changed.')}
      >
        <a href="/">{name}</a>
      </EditableTextWrapper>
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
  name: string.isRequired,
  status: StatusIndicator.propTypes.isRequired
};
