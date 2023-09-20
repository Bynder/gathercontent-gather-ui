import React from "react";
import cx from "classnames";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { Main } from "./Main";
import { InlineSidebar } from "./InlineSidebar";
import { Section } from "./Section";
import { LayoutOverlaySidebar } from "./LayoutOverlaySidebar";

function Layout({ children, className, fullScreen, ...rest }: any) {
  const layoutClassName = cx(
    "layout flex flex-col overflow-x-hidden",
    className,
    {
      "h-screen": fullScreen,
    }
  );

  return (
    <div className={layoutClassName} {...rest}>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  className: "",
  fullScreen: true,
};

Layout.Header = Header;
Layout.SubHeader = SubHeader;
Layout.Main = Main;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.OverlaySidebar = LayoutOverlaySidebar;
Layout.InlineSidebar = InlineSidebar;
Layout.Section = Section;

export { Layout };
