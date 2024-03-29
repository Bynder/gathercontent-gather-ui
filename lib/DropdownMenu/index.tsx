/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import { DropdownMenuItem } from "./DropdownMenuItem";

export function DropdownMenu({
  items,
  className,
  listClassName,
  type,
  direction,
  caret,
  children,
  shouldDisplay,
  alignRight,
  selected,
  downIcon,
  fullWidth,
  buttonClassName,
  disabled,
  ...rest
}: any) {
  const [showItems, setShowItems] = useState(selected);
  const eventSet = useRef(selected);

  const closeDropdown = (e: any) => {
    let isTargetDropDownButton = false;
    if (e.target.classList) {
      isTargetDropDownButton = e.target.classList.contains(
        "gui-dropdown-menu__button"
      );
    }
    if (showItems && !isTargetDropDownButton) {
      setShowItems(false);
    }
  };

  useEffect(() => {
    if (showItems) {
      document.body.addEventListener("click", closeDropdown);
      eventSet.current = true;
    }
    if (!showItems && eventSet.current) {
      document.body.removeEventListener("click", closeDropdown);
      eventSet.current = false;
    }
    return () => {
      if (eventSet.current) {
        document.body.removeEventListener("click", closeDropdown);
      }
    };
  }, [showItems]);

  const toggleShowItems = () => {
    if (!disabled) {
      setShowItems(!showItems);
    }
  };

  const menuClass = cx(`gui-dropdown ${className}`, {
    "gui-is-visible": shouldDisplay,
    "gui-is-hidden": !shouldDisplay,
    "gui-open gui-is-active": showItems,
    "gui-dropup": direction === "up",
    "gui-full-width": fullWidth,
  });

  const listClass = cx(`gui-dropdown-menu ${listClassName}`, {
    "gui-align-right": alignRight,
  });

  const buttonClass = cx(
    `${buttonClassName} gui-dropdown-menu__button gui-dropdown-menu__button--${[
      type,
    ]}`,
    {
      "gui-dropdown-menu__button-disabled": disabled,
    }
  );

  return (
    <div className={menuClass} {...rest}>
      <Button types={[type]} className={buttonClass} onClick={toggleShowItems}>
        {children}
        {caret && (
          <span className="gui-dropdown-menu__caret">
            {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
            <Icon name="caret" size="micro" title="Caret icon" />
          </span>
        )}
        {downIcon && (
          <span className="gui-dropdown-menu__down">
            {/* @ts-expect-error TS(2322): Type '{ name: string; size: string; }' is not assi... Remove this comment to see the full error message */}
            <Icon name="down" size="micro" title="Down icon" />
          </span>
        )}
      </Button>

      <ul className={listClass}>
        {items.map((item: any, index: any) => (
          <DropdownMenuItem item={item} key={`item-${index}`} />
        ))}
      </ul>
    </div>
  );
}

DropdownMenu.defaultProps = {
  type: "primary",
  selected: false,
  alignRight: false,
  className: "",
  listClassName: "",
  caret: false,
  downIcon: false,
  direction: "down",
  shouldDisplay: true,
  fullWidth: false,
  buttonClassName: "",
  disabled: false,
};
