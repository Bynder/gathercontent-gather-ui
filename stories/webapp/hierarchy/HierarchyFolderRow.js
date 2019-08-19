import React, { useEffect, useState, useContext } from 'react';
import { arrayOf, string, node, func, bool } from 'prop-types';
import { FolderRow, SelectedObjectsContext } from 'lib';
import cx from 'classnames';
import { HierarchyFolderRowActions } from './FolderRow/HierarchyFolderRowActions';
import { HierarchyNameInput } from './shared/HierarchyNameInput';

function HierarchyFolderRow({ id, name, childIds, nameForm, children, open }) {
  const [folderName, setFolderName] = useState(name);
  const [newFolderId, setNewFolderId] = useState(false);

  const {
    selected,
    selectMultiple,
    deselectMultiple,
    currentSelectedType
  } = useContext(SelectedObjectsContext);

  const isLevelSelected = selected.indexOf(id) !== -1;
  const isDisabled =
    currentSelectedType && currentSelectedType !== 'folder' && !isLevelSelected;

  const classNames = cx({
    'is-selected': isLevelSelected,
    'is-disabled': isDisabled
  });

  useEffect(() => {
    setFolderName(name);
  }, [name]);

  return (
    <FolderRow
      className={classNames}
      open={open}
      onClick={() => {
        if (!isDisabled) {
          return isLevelSelected
            ? deselectMultiple([id, ...childIds], 'folder')
            : selectMultiple([id, ...childIds], 'folder');
        }
        return null;
      }}
    >
      {(show, setShow) => (
        <>
          <FolderRow.Inner style={{ minWidth: '320px' }}>
            <FolderRow.Name setShow={setShow} show={show} showToggle>
              {nameForm || (
                <HierarchyNameInput
                  name={folderName}
                  onChange={value => setFolderName(value)}
                />
              )}
            </FolderRow.Name>

            <FolderRow.Aside>
              <FolderRow.Cell>
                <HierarchyFolderRowActions
                  startCreatingFolder={() => setNewFolderId(`${id}-new-folder`)}
                />
              </FolderRow.Cell>

              <FolderRow.Cell meta>{`${childIds.length} items`}</FolderRow.Cell>
            </FolderRow.Aside>
          </FolderRow.Inner>

          <FolderRow.Contents>
            {children(newFolderId, setNewFolderId)}
          </FolderRow.Contents>
        </>
      )}
    </FolderRow>
  );
}

HierarchyFolderRow.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  childIds: arrayOf(node).isRequired,
  children: func.isRequired,
  nameForm: node,
  open: bool
};

HierarchyFolderRow.defaultProps = {
  nameForm: null,
  open: true
};

export { HierarchyFolderRow };
