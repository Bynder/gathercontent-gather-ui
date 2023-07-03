import React from "react";
import PropTypes from "prop-types";
import BreadcrumbItem from "./BreadcrumbItem";

export function Breadcrumb({ children, className, ...rest }: any) {
  return <nav {...rest} className={`breadcrumb ${className}`}>
    {children}
  </nav>
}

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  className: "",
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
