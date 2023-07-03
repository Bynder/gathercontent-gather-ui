import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';

function FolderRowActions({
  children,
  ...props
}: any) {
  return <div className="folder-row__actions" {...props}>
    {children}
  </div>
}

FolderRowActions.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

export { FolderRowActions };
