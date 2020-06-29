import React from 'react';
import { node, string, bool } from 'prop-types';
import cx from 'classnames';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { Main } from './Main';
import { Sidebar } from '../Sidebar/Sidebar';
import { InlineSidebar } from './InlineSidebar';
import { Section } from './Section';

function Layout({ children, className, fullScreen }) {
  const layoutClassName = cx('flex flex-col overflow-x-hidden', className, {
    'h-screen': fullScreen
  });
  return <div className={layoutClassName}>{children}</div>;
}

Layout.propTypes = {
  children: node.isRequired,
  className: string,
  fullScreen: bool
};

Layout.defaultProps = {
  className: '',
  fullScreen: true
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
