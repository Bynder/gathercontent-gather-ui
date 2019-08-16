import React, { useMemo } from 'react';
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
  const avatars = useMemo(
    () => (
      <AvatarGroupMock
        defaultMaxCount={8}
        avatarProps={{ microSize: true, bordered: true }}
        avatarGroupProps={{ micro: true }}
      >
        {({ ui, count }) => (count ? ui : null)}
      </AvatarGroupMock>
    ),
    []
  );

  const {
    isSelected,
    isDisabled,
    handleClick,
    isHovered,
    handleMouseEnter,
    handleMouseLeave
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
      onMouseLeave={handleMouseLeave}
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

        <ItemRow.Data style={{ minWidth: '75px' }}>{avatars}</ItemRow.Data>
      </ItemRow.Aside>
    </ItemRow>
  );
};

HierarchyItemRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  status: StatusIndicator.propTypes.isRequired
};
