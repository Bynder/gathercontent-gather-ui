import React from 'react';
import { node } from 'prop-types';

function FolderRowInner({ children, ...rest }) {
  return (
    <div className="folder-row__inner" {...rest}>
      {children}
    </div>
  );
}

FolderRowInner.propTypes = {
  children: node.isRequired
};

export { FolderRowInner };
