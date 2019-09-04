import React, { useMemo } from 'react';
import { action } from '@storybook/addon-actions';
import { shape, string } from 'prop-types';
import cx from 'classnames';
import { ItemRow, StatusIndicator, EditableTextWrapper } from '../../../lib';
import { AvatarGroupMock } from '../../../lib/Avatar/stories/AvatarGroupMock';
import { useObjectSelector } from '../../../lib/SelectionProvider/useObjectSelector';

const createStatusIndicator = status => (
  <StatusIndicator color={status.color} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ id, name, status }) => {
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

  const avatars = useMemo(
    () => (
      <AvatarGroupMock
        defaultMaxCount={8}
        avatarProps={{ smallSize: true, bordered: true }}
        avatarGroupProps={{ small: true }}
      >
        {({ ui, count }) => (count ? <ItemRow.Data>{ui}</ItemRow.Data> : null)}
      </AvatarGroupMock>
    ),
    []
  );

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
  status: shape({}).isRequired
};
