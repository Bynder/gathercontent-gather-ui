import React from 'react';
import { node, string } from 'prop-types';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Main } from './Main';
import { Sidebar } from '../Sidebar/Sidebar';
import { InlineSidebar } from './InlineSidebar';
import { Section } from './Section';

function Layout({ children, className }) {
  return (
    <div className={`h-screen flex flex-col overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  className: string
};

Layout.defaultProps = {
  className: ''
};

Layout.Header = Header;
Layout.SubHeader = SubHeader;
Layout.Main = Main;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.OverlaySidebar = Sidebar;
Layout.InlineSidebar = InlineSidebar;
Layout.Section = Section;

export { Layout };
