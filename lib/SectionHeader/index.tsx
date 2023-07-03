import React from "react";
import cx from "classnames";
import { SectionHeaderTitle } from "./SectionHeaderTitle";

export function SectionHeader({
  title,
  cta,
  children,
  className,
  collapse,
  noBorder,
  ...rest
}: any) {
  const classes = cx(`section-header ${className}`, {
    "section-header-collapse": collapse,
    "section-header-no-border": noBorder,
  });

  return (
    <div className={classes} {...rest}>
      <div className="section-header__inner">
        <SectionHeaderTitle title={title}>{children}</SectionHeaderTitle>
        {cta}
      </div>
    </div>
  );
}

SectionHeader.defaultProps = {
  cta: null,
  children: null,
  className: "",
};

export default SectionHeader;
