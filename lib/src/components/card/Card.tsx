import React from "react";
import cx from "classnames";
import { CardContent } from "./CardContent";
import { CardControls } from "./CardControls";
import { CardTitle } from "./CardTitle";
import { CardDescription } from "./CardDescription";
import { CardFooter } from "./CardFooter";
import { cardSizes } from "./common";

function Card({
  onClick,
  className,
  children,
  innerClassNames,
  selected,
  highlighted,
  added,
  removed,
  active,
  disabled,
  size,
}: any) {
  const classNames = cx("card outline-none", className, {
    "card-interactive": onClick,
    "card-selected": selected,
    "card-highlighted": highlighted,
    "card-added": added,
    "card-removed": removed,
    "card-disabled": disabled,
    "card-active": active,
    "card-sm": size === cardSizes.sm,
    "card-md": size === cardSizes.md,
  });

  const innerClasses = cx("card-inner", innerClassNames);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      role={onClick ? "button" : "presentation"}
      className={classNames}
      onClick={onClick}
      onKeyUp={handleKeyPress}
    >
      <div className={innerClasses}>{children}</div>
    </div>
  );
}

Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Controls = CardControls;
Card.Footer = CardFooter;

Card.defaultProps = {
  onClick: null,
  innerClassNames: "",
  selected: false,
  highlighted: false,
  added: false,
  removed: false,
  disabled: false,
  active: false,
  size: "",
};

export { Card };
