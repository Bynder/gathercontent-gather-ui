import React from 'react';
import PropTypes from 'prop-types';

function FolderRowAction({
  children,
  ...props
}: any) {
  return <div className="folder-row__action" {...props}>
    {children}
  </div>
}

FolderRowAction.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export { FolderRowAction };
