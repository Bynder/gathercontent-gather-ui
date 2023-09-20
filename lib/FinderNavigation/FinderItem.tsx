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
  const classNames = cx(`finder-item ${className}`, {
    "finder-item-active": active,
    "finder-item-disabled": disabled,
    "finder-item-hover-settings": hoverSettings,
    "finder-item-selected": selected,
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
