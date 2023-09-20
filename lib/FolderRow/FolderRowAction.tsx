import React from "react";

function FolderRowAction({ children, ...props }: any) {
  return (
    <div className="folder-row__action" {...props}>
      {children}
    </div>
  );
}

export { FolderRowAction };
