import React from 'react';
import { node } from 'prop-types';

function FolderRowAside({
  children
}: any) {
  return <div className="folder-row__aside">{children}</div>;
}

FolderRowAside.propTypes = {
  children: node.isRequired
};

export { FolderRowAside };
