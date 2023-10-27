import React from "react";

function FolderRowActions({ children, ...props }: any) {
  return (
    <div className="gui-folder-row__actions" {...props}>
      {children}
    </div>
  );
}

export { FolderRowActions };
