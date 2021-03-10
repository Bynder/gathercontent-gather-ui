import * as React from 'react';
import { Layout } from 'lib';
import { SidebarHeader } from './SidebarHeader';
import { SidebarBody } from './SidebarBody';
import { SidebarSection } from './SidebarSection';
import { SidebarHeading } from './SidebarHeading';
import { SidebarSubHeading } from './SidebarSubHeading';

export function Sidebar({ children, className = '', ...rest }) {
  return (
    <Layout className={`sidebar ${className}`} {...rest}>
      {children}
    </Layout>
  );
}

Sidebar.Header = SidebarHeader;
Sidebar.Body = SidebarBody;
Sidebar.Section = SidebarSection;
Sidebar.Heading = SidebarHeading;
Sidebar.SubHeading = SidebarSubHeading;
