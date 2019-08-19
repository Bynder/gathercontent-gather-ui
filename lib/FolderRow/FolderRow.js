import React, { useState, useEffect } from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';

function FolderRow({ children, open, className, backdrop, ...rest }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const classNames = cx(`folder-row ${className}`, {
    'folder-row--open': show
  });

  return (
    <div className={classNames} {...rest}>
      {backdrop && <div className="folder-row__backdrop">{backdrop}</div>}
      {children(show)}
    </div>
  );
}

FolderRow.propTypes = {
  children: node.isRequired,
  className: string,
  open: bool,
  backdrop: node
};

FolderRow.defaultProps = {
  className: '',
  open: false,
  backdrop: null
};

export { FolderRow };
