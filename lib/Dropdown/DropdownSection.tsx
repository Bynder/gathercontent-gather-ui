import React, { HTMLAttributes } from "react";

function DropdownSection({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="dropdown__section" {...rest}>
      {children}
    </div>
  );
}

export default DropdownSection;
