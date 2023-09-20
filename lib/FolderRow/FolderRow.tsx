import React, { useState, useEffect } from "react";
import cx from "classnames";

function FolderRow({ children, open, className, ...rest }: any) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const classNames = cx(`folder-row ${className}`, {
    "folder-row--open": show,
  });

  return (
    <div className={classNames} {...rest}>
      {children(show, setShow)}
    </div>
  );
}

FolderRow.defaultProps = {
  className: "",
  open: false,
};

export { FolderRow };
