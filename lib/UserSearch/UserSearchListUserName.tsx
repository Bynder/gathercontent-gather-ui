import React from "react";
import cx from "classnames";
import Icon from "../Icon";

function UserSearchListUserName({ name, isSelected }: any) {
  const classes = cx("user-search-list__user-name", {
    "is-active": isSelected,
  });
  return (
    <div className={classes}>
      <span className="text-overflow-ellipsis">{name}</span>
      {isSelected && <Icon className="h-margin-left-quarter" name="boldTick" />}
    </div>
  );
}

export default UserSearchListUserName;
