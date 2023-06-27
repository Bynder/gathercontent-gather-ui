import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';

const FolderRowActions = ({
  children,
  ...props
}: any) => (
  <div className="folder-row__actions" {...props}>
    {children}
  </div>
);

FolderRowActions.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

export { FolderRowActions };
