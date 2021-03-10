import * as React from 'react';
import { Layout } from 'lib';

export function SidebarBody({ children, className = '', ...rest }) {
  return (
    <Layout.Body className={`sidebar-body p-0 ${className}`} {...rest}>
      {children}
    </Layout.Body>
  );
}
