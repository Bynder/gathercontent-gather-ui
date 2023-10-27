import * as React from "react";
import { ButtonIcon, Layout } from "lib";

export function SidebarHeader({
  children,
  className = "",
  onClose,
  ...rest
}: any) {
  return (
    <Layout.Header className={`gui-sidebar-header ${className}`} {...rest}>
      <div className="gui-text-overflow-ellipsis">{children}</div>
      {onClose && (
        <ButtonIcon
          name="cross"
          onClick={onClose}
          size={ButtonIcon.sizes.md}
          iconTitle="Close sidebar"
          className="flex-shrink-0"
        />
      )}
    </Layout.Header>
  );
}
