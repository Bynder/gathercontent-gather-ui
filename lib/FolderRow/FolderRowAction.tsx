import React from "react";

function FolderRowAction({ children, ...props }: any) {
  return (
    <div className="gui-folder-row__action" {...props}>
      {children}
    </div>
  );
}

export { FolderRowAction };
