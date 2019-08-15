import React, { useContext } from 'react';
import { number, oneOfType, node, arrayOf, bool, string } from 'prop-types';
import faker from 'faker';
import cx from 'classnames';
import { action } from '@storybook/addon-actions';
import { FolderRow, SelectedObjectsContext } from '../../../lib';
import EditableTextWrapper from '../../../lib/EditableTextWrapper';

export const HierarchyFolderRow = ({ childCount, children, open, id }) => {
  const name = faker.commerce.department();
  const {
    selected,
    selectMultiple,
    deselectMultiple,
    currentSelectedType
  } = useContext(SelectedObjectsContext);
  const childIds = [...Array(childCount).keys()].map(
    child => `child-${child}-${id}`
  );
  const isLevelSelected = selected.indexOf(id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'folder' && !isLevelSelected;

  const classNames = cx('h-margin-bottom-half', {
    'is-selected': isLevelSelected,
    'is-disabled': isDisabled
  });

  return (
    <FolderRow
      className={classNames}
      metaText={`${childCount} items`}
      name={
        <EditableTextWrapper
          value={name}
          className="h-margin-clear"
          onChange={action('Folder name changed.')}
        >
          {name}
        </EditableTextWrapper>
      }
      open={open}
      showToggle
      style={{ minWidth: '320px' }}
      onClick={() => {
        if (!isDisabled) {
          return isLevelSelected
            ? deselectMultiple([id, ...childIds], 'folder')
            : selectMultiple([id, ...childIds], 'folder');
        }
        return null;
      }}
    >
      {children}
    </FolderRow>
  );
};

HierarchyFolderRow.propTypes = {
  childCount: number.isRequired,
  children: oneOfType([node, arrayOf(node)]),
  open: bool.isRequired,
  id: string.isRequired
};

HierarchyFolderRow.defaultProps = {
  children: null
};
