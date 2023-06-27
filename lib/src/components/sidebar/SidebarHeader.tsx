import * as React from 'react';
import { ButtonIcon, Layout } from 'lib';

export function SidebarHeader({ children, className = '', onClose, ...rest }) {
  return (
    <Layout.Header className={`sidebar-header ${className}`} {...rest}>
      <div className="text-overflow-ellipsis">{children}</div>
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
