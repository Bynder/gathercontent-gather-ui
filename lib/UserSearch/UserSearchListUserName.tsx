import React from "react";
import cx from "classnames";
import Icon from "../Icon";

function UserSearchListUserName({ name, isSelected }: any) {
  const classes = cx("gui-user-search-list__user-name", {
    "gui-is-active": isSelected,
  });
  return (
    <div className={classes}>
      <span className="gui-text-overflow-ellipsis">{name}</span>
      {isSelected && (
        <Icon className="gui-h-margin-left-quarter" name="boldTick" />
      )}
    </div>
  );
}

export default UserSearchListUserName;
