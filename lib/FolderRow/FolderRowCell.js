import React from 'react';
import { bool, node } from 'prop-types';
import cx from 'classnames';

function FolderRowCell({ children, meta, ...props }) {
  const classNames = cx(`folder-row__cell`, {
    'folder-row__cell--meta': meta
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

FolderRowCell.propTypes = {
  children: node.isRequired,
  meta: bool
};

FolderRowCell.defaultProps = {
  meta: false
};

export { FolderRowCell };
