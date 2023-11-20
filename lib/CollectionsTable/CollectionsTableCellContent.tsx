import React from "react";
import cx from "classnames";
import { defaultProps } from "./propTypes";

function CollectionsTableCellContent({ children, allowOverflow }: any) {
  const classNames = cx("gui-collections-table__cell-content", {
    "gui-collections-table__cell-content--allow-overflow": allowOverflow,
  });

  return <div className={classNames}>{children}</div>;
}

CollectionsTableCellContent.defaultProps = {
  ...defaultProps,
  allowOverflow: false,
};

export default CollectionsTableCellContent;
