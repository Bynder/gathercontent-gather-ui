import React from "react";
import { defaultProps } from "./propTypes";

function CollectionsTableHead({ children, className, ...props }: any) {
  return (
    <div className={`collections-table__head ${className}`} {...props}>
      {children}
    </div>
  );
}

CollectionsTableHead.defaultProps = defaultProps;

export default CollectionsTableHead;
