import * as React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarBody } from './SidebarBody';
import { SidebarSection, SidebarSectionContext } from './SidebarSection';
import { SidebarHeading } from './SidebarHeading';
import { SidebarSubHeading } from './SidebarSubHeading';
import { SidebarFooter } from './SidebarFooter';

export function Sidebar({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar ${className}`} {...rest}>
      {children}
    </div>
  );
}

Sidebar.Header = SidebarHeader;
Sidebar.Body = SidebarBody;
Sidebar.Section = SidebarSection;
Sidebar.SectionContext = SidebarSectionContext;
Sidebar.Heading = SidebarHeading;
Sidebar.SubHeading = SidebarSubHeading;
Sidebar.Footer = SidebarFooter;
