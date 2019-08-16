import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import { shape, string } from 'prop-types';
import cx from 'classnames';
import {
  ItemRow,
  StatusIndicator,
  EditableTextWrapper,
  SelectedObjectsContext
} from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';

const createStatusIndicator = status => (
  <StatusIndicator color={status.color} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ id, name, status }) => {
  const { selected, updateSelected, currentSelectedType } = useContext(
    SelectedObjectsContext
  );

  const isSelected = selected.indexOf(id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'item' && !isSelected;

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': selected.indexOf(id) !== -1,
    'is-disabled': isDisabled
  });

  return (
    <ItemRow
      className={classNames}
      bordered
      style={{ minWidth: '320px' }}
      onClick={() => !isDisabled && updateSelected(id, 'item')}
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
          {({ ui, count }) =>
            count ? <ItemRow.Data>{ui}</ItemRow.Data> : null
          }
        </AvatarGroupMock>
      </ItemRow.Aside>
    </ItemRow>
  );
};

HierarchyItemRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  status: shape({}).isRequired
};
