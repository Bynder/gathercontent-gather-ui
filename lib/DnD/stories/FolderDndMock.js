import React from 'react';
import { FolderRow } from '../../FolderRow';
import { Draggable } from '../Draggable';

function FolderDndMock({ children, ...rest }) {
  const preview = (
    <div style={{ maxWidth: '300px' }}>
      <FolderRow {...rest} />
    </div>
  );

  return (
    <Draggable type="folder" preview={preview}>
      {({ isDragging }, dragRef) => (
        <div ref={dragRef}>
          <FolderRow
            {...rest}
            style={{
              opacity: isDragging ? '.5' : '1'
            }}
          >
            {children}
          </FolderRow>
        </div>
      )}
    </Draggable>
  );
}

FolderDndMock.propTypes = FolderRow.propTypes;

export { FolderDndMock };
