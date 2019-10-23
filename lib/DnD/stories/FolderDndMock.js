import React from 'react';
import { FolderRow } from '../../FolderRow';
import { Draggable } from '../Draggable';

function FolderDndMock({ name }) {
  const preview = (
    <FolderRow style={{ maxWidth: '300px' }}>
      {() => (
        <>
          <FolderRow.Inner style={{ minWidth: '320px' }}>
            <div className="folder-row__backdrop" />
            <FolderRow.Name>{name}</FolderRow.Name>
          </FolderRow.Inner>
        </>
      )}
    </FolderRow>
  );

  return (
    <Draggable item={{ type: 'folder' }} preview={preview}>
      {({ isDragging }, dragRef) => (
        <div ref={dragRef}>
          <FolderRow
            style={{
              opacity: isDragging ? '.5' : '1'
            }}
          >
            {() => (
              <>
                <FolderRow.Inner style={{ minWidth: '320px' }}>
                  <div className="folder-row__backdrop" />
                  <FolderRow.Name>{name}</FolderRow.Name>
                </FolderRow.Inner>
              </>
            )}
          </FolderRow>
        </div>
      )}
    </Draggable>
  );
}

FolderDndMock.propTypes = FolderRow.propTypes;

export { FolderDndMock };
