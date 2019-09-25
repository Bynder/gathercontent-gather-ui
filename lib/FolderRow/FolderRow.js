import React, { useState, useEffect } from 'react';
import { bool, node, string, oneOfType, func } from 'prop-types';
import cx from 'classnames';

function FolderRow({ children, open, className, ...rest }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const classNames = cx(`folder-row ${className}`, {
    'folder-row--open': show
  });

  return (
    <div className={classNames} {...rest}>
      {children(show, setShow)}
    </div>
  );
}

FolderRow.propTypes = {
  children: oneOfType([node, func]).isRequired,
  className: string,
  open: bool
};

FolderRow.defaultProps = {
  className: '',
  open: false
};

export { FolderRow };
