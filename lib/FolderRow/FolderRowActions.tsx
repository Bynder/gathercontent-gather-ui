import React from "react";

function FolderRowActions({ children, ...props }: any) {
  return (
    <div className="folder-row__actions" {...props}>
      {children}
    </div>
  );
}

export { FolderRowActions };
