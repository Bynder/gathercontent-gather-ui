import React from "react";
import cx from "classnames";

function CollectionsTableRow({
  children,
  className,
  selected,
  disabled,
  isOver,
  ...props
}: any) {
  const classes = cx(`gui-collections-table__row ${className}`, {
    "gui-collections-table__row--selected": selected,
    "gui-collections-table__row--disabled": disabled,
    "gui-collections-table__row--is-over": isOver,
  });
  return (
    <div className={classes} {...props} role="row">
      {children}
    </div>
  );
}

CollectionsTableRow.defaultProps = {
  className: "",
  selected: false,
  disabled: false,
  isOver: false,
};

export default CollectionsTableRow;
