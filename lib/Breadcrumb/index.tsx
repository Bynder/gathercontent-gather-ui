import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

export function Breadcrumb({ children, className, ...rest }: any) {
  return (
    <nav {...rest} className={`breadcrumb ${className}`}>
      {children}
    </nav>
  );
}

Breadcrumb.defaultProps = {
  className: "",
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
