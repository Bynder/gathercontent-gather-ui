import * as React from 'react';
import { Layout } from 'lib';

export function SidebarHeader({ children, className = '', ...rest }) {
  return (
    <Layout.Header className={`sidebar-header ${className}`} {...rest}>
      <div className="text-overflow-ellipsis">{children}</div>
    </Layout.Header>
  );
}
