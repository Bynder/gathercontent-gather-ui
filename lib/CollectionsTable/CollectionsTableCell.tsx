import React from "react";
import cx from "classnames";
import CollectionsTableCellContent from "./CollectionsTableCellContent";
import { defaultProps } from "./propTypes";

function CollectionsTableCell({
  children,
  className,
  allowOverflow,
  alignRight,
  ...props
}: any) {
  const classNames = cx(`gui-collections-table__cell ${className}`, {
    "gui-collections-table__cell--allow-overflow": allowOverflow,
    "gui-collections-table__cell--align-right": alignRight,
  });
  return (
    <div className={classNames} {...props} role="cell">
      <CollectionsTableCellContent allowOverflow={allowOverflow}>
        {children}
      </CollectionsTableCellContent>
    </div>
  );
}

CollectionsTableCell.defaultProps = {
  ...defaultProps,
  allowOverflow: false,
  alignRight: false,
};

export default CollectionsTableCell;
