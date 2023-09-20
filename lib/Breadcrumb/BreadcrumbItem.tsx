import React from "react";

function BreadcrumbItem({ children, ...rest }: any) {
  return (
    <div className="breadcrumb__item" {...rest}>
      {children}
    </div>
  );
}

export default BreadcrumbItem;
