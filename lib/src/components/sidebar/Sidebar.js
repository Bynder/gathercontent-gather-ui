import * as React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarBody } from './SidebarBody';
import { SidebarSection, SidebarSectionContext } from './SidebarSection';
import { SidebarHeading } from './SidebarHeading';
import { SidebarSubHeading } from './SidebarSubHeading';
import { SidebarFooter } from './SidebarFooter';
import { SidebarSubSection } from './SidebarSubSection';
import { SidebarSectionHead } from './SidebarSectionHead';
import { SidebarSectionToggle } from './SidebarSectionToggle';
import { SidebarDescription } from './SidebarDescription';

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
Sidebar.SubSection = SidebarSubSection;
Sidebar.SubHeading = SidebarSubHeading;
Sidebar.Footer = SidebarFooter;
Sidebar.SectionHead = SidebarSectionHead;
Sidebar.SectionToggle = SidebarSectionToggle;
Sidebar.Description = SidebarDescription;