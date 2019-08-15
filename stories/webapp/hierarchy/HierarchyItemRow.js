import React, { useContext } from 'react';
import { string } from 'prop-types';
import faker from 'faker';
import { action } from '@storybook/addon-actions';
import cx from 'classnames';
import {
  ItemRow,
  StatusIndicator,
  EditableTextWrapper,
  SelectedObjectsContext
} from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';

const createStatusIndicator = statusColor => (
  <StatusIndicator color={statusColor} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ statusColor, id }) => {
  const name = faker.commerce.productName();
  const { selected, updateSelected, currentSelectedType } = useContext(
    SelectedObjectsContext
  );

  const isSelected = selected.indexOf(id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'item' && !isSelected;

  const classNames = cx('h-margin-bottom-half', {
    'item-row--selected': selected.indexOf(id) !== -1,
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
        {createStatusIndicator(statusColor)}
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
  statusColor: StatusIndicator.propTypes.color.isRequired,
  id: string.isRequired
};
