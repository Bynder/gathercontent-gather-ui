import React from "react";
import cx from "classnames";

function FolderRowContents({ show, children, highlight, ...rest }: any) {
  const classNames = cx(`gui-folder-row__contents`, {
    "gui-folder-row__contents--highlight": highlight,
  });

  return (
    show && (
      <div className={classNames} {...rest}>
        {children}
      </div>
    )
  );
}

FolderRowContents.defaultProps = {
  show: true,
  highlight: false,
  children: null,
};

export { FolderRowContents };
