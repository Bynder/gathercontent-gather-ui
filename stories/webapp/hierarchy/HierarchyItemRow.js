import React from 'react';
import { action } from '@storybook/addon-actions';
import { string } from 'prop-types';
import cx from 'classnames';
import { ItemRow, StatusIndicator, EditableTextWrapper } from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';
import { useObjectSelector } from '../../../lib/SelectedObjectsProvider/useObjectSelector';

const createStatusIndicator = status => (
  <StatusIndicator color={status.color} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ id, name, status }) => {
  const {
    isSelected,
    isDisabled,
    handleClick,
    isHovered,
    handleMouseEnter
  } = useObjectSelector(
    id,
    'item',
    [id],
    (currentSelectedType, isChildSelected) =>
      currentSelectedType && currentSelectedType !== 'item' && !isChildSelected
  );

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  });

  return (
    <ItemRow
      className={classNames}
      bordered
      style={{ minWidth: '320px' }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
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
  status: StatusIndicator.propTypes.isRequired
};
