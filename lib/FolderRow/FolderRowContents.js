import React from 'react';
import { bool, node } from 'prop-types';
import cx from 'classnames';

function FolderRowContents({ show, children, highlight, ...rest }) {
  const classNames = cx(`folder-row__contents`, {
    'folder-row__contents--highlight': highlight
  });

  return (
    show && (
      <div className={classNames} {...rest}>
        {children}
      </div>
    )
  );
}

FolderRowContents.propTypes = {
  show: bool,
  highlight: bool,
  children: node
};

FolderRowContents.defaultProps = {
  show: true,
  highlight: false,
  children: null
};

export { FolderRowContents };
