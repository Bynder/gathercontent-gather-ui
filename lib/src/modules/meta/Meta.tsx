import React from "react";
import cx from "classnames";
import { MetaHeading } from "./MetaHeading";
import { MetaText } from "./MetaText";
import { MetaFooter } from "./MetaFooter";

function Meta({ children, className }: any) {
  const classNames = cx("gui-meta", className);

  return <div className={classNames}>{children}</div>;
}

Meta.Heading = MetaHeading;
Meta.Text = MetaText;
Meta.Footer = MetaFooter;

export { Meta };
