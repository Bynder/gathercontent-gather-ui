import React, { useState, useEffect } from 'react';
import { bool, node } from 'prop-types';
import cx from 'classnames';

function FolderRow({ children, open, ...rest }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const classNames = cx(`folder-row`, {
    'folder-row--open': show
  });

  return (
    <div className={classNames} {...rest}>
      {children(show)}
    </div>
  );
}

FolderRow.propTypes = {
  children: node.isRequired,
  open: bool
};

FolderRow.defaultProps = {
  open: false
};

export { FolderRow };
