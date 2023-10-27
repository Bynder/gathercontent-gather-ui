import React, { HTMLAttributes } from "react";
import cx from "classnames";
import { ItemRowName } from "./ItemRowName";
import { ItemRowAside } from "./ItemRowAside";
import { ItemRowData } from "./ItemRowData";

interface Props extends HTMLAttributes<HTMLDivElement> {
  stacked?: boolean;
  bordered?: boolean;
  list?: boolean;
}

function ItemRow({
  children,
  stacked,
  className,
  bordered,
  list,
  ...rest
}: Props) {
  const classNames = cx(`gui-item-row ${className}`, {
    "gui-item-row--stacked": stacked,
    "gui-item-row--bordered": bordered,
    "gui-item-row-list": list,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

ItemRow.defaultProps = {
  stacked: false,
  bordered: false,
  className: "",
};

ItemRow.Name = ItemRowName;
ItemRow.Aside = ItemRowAside;
ItemRow.Data = ItemRowData;

export { ItemRow };
