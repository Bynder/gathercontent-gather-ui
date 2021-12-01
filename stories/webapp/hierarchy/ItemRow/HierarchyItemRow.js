import React, { useMemo, useState } from 'react';
import { node, shape, string } from 'prop-types';
import faker from 'faker';
import cx from 'classnames';
import { ItemRow, StatusIndicator, useObjectSelector } from 'lib';
import { AvatarGroupMock } from 'lib/Avatar/stories/AvatarGroupMock';
import { HierarchyNameInput } from '../shared/HierarchyNameInput';

const createStatusIndicator = (status) => (
  <StatusIndicator color={status.color} className="h-margin-right-half" />
);

export const HierarchyItemRow = ({ id, name, status, nameForm }) => {
  const {
    isSelected,
    isDisabled,
    handleClick,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useObjectSelector(
    id,
    'item',
    [id],
    (currentSelectedType, isChildSelected) =>
      currentSelectedType && currentSelectedType !== 'item' && !isChildSelected
  );

  const [itemName, setItemName] = useState(
    name || faker.commerce.productName()
  );

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isSelected,
    'is-disabled': isDisabled,
    'is-hovered': isHovered,
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

  return useMemo(
    () => (
      <ItemRow
        className={classNames}
        bordered
        style={{ minWidth: '320px' }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {nameForm || (
          <>
            <ItemRow.Name>
              {status && createStatusIndicator(status)}
              <HierarchyNameInput
                name={itemName}
                onChange={(value) => setItemName(value)}
                onStartEditing={() => {}}
                onStopEditing={() => {}}
                useLink
              />
            </ItemRow.Name>
            <ItemRow.Aside>
              <ItemRow.Data style={{ maxWidth: '100px' }}>
                <span className="text-overflow-ellipsis">No template</span>
              </ItemRow.Data>
              <ItemRow.Data style={{ minWidth: '100px' }}>
                {avatars}
              </ItemRow.Data>
            </ItemRow.Aside>
          </>
        )}
      </ItemRow>
    ),
    [isSelected, isHovered, isDisabled]
  );
};

HierarchyItemRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  status: shape({}),
  nameForm: node,
};

HierarchyItemRow.defaultProps = {
  status: null,
  nameForm: null,
};
