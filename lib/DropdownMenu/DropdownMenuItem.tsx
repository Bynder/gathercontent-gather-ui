import React from "react";
import cx from "classnames";
import Icon from "../Icon";
import AvatarInformation from "../Avatar/AvatarInformation";
import Avatar from "../Avatar";

export function DropdownMenuItem({ item }: any) {
  const { className, type } = item;

  const activeContents = (
    <span className="gui-dropdown-item__tick is-active">
      {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
      <Icon name="tick" size="micro" />
    </span>
  );

  const classes = cx(
    "gui-dropdown__item",
    className,
    `gui-dropdown__item--${item.linkType || "gui-button"}`
  );

  if (type === "separator") {
    return <li className="gui-dropdown__separator" />;
  }

  if (type === "link") {
    return (
      <li className={classes}>
        {item.active && activeContents}
        <a className="gui-dropdown__link" href={item.href}>
          {item.name}
        </a>
      </li>
    );
  }

  if (type === "withAdditional") {
    return (
      <li className={classes}>
        <button
          type="button"
          className="gui-dropdown__link gui-dropdown__additional"
          onClick={item.action}
        >
          {item.active && activeContents}
          <span className="gui-dropdown__item--name">{item.name}</span>
          {item.additional && (
            <span className="gui-dropdown__item--additional">
              {item.additional}
            </span>
          )}
        </button>
      </li>
    );
  }

  if (type === "avatar") {
    return (
      <li className={classes}>
        <button
          type="button"
          className="gui-dropdown__link dropdown__avatar"
          onClick={item.action}
        >
          <Avatar url={item.avatar} initials={item.initials}>
            <AvatarInformation name={item.name} email={item.email} />
          </Avatar>
        </button>
      </li>
    );
  }

  if (type === "title") {
    return (
      <li className={classes}>
        <button
          type="button"
          className="gui-dropdown__link gui-dropdown__title"
          onClick={item.action}
        >
          <span className="gui-dropdown__item--name">{item.name}</span>
          {item.additional && (
            <span className="gui-dropdown__item--additional">
              {item.additional}
            </span>
          )}
        </button>
      </li>
    );
  }

  return (
    <li className={classes}>
      <button
        type="button"
        className="gui-dropdown__link"
        onClick={item.action}
      >
        {item.active && activeContents}
        {item.name}
      </button>
    </li>
  );
}
