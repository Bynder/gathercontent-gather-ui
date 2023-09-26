import React from "react";
import cx from "classnames";

function FolderRowCell({ children, meta, ...props }: any) {
  const classNames = cx(`folder-row__cell`, {
    "folder-row__cell--meta": meta,
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

FolderRowCell.defaultProps = {
  meta: false,
};

export { FolderRowCell };
