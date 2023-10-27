import React from "react";

function FolderRowInner({ children, ...rest }: any) {
  return (
    <div className="gui-folder-row__inner" {...rest}>
      {children}
    </div>
  );
}

export { FolderRowInner };
