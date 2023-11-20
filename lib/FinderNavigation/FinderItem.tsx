import React from "react";
import cx from "classnames";

function FinderItem({
  className,
  active,
  hoverSettings,
  selected,
  children,
  disabled,
  ...rest
}: any) {
  const classNames = cx(`gui-finder-item ${className}`, {
    "gui-finder-item-active": active,
    "gui-finder-item-disabled": disabled,
    "gui-finder-item-hover-settings": hoverSettings,
    "gui-finder-item-selected": selected,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

FinderItem.defaultProps = {
  active: false,
  className: "",
  hoverSettings: true,
  selected: false,
  disabled: false,
};

export default FinderItem;
