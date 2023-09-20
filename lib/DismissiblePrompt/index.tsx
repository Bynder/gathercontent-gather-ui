import React from "react";
import Icon from "../Icon";
import Button from "../Button";

export function DismissiblePrompt({
  children,
  onDismiss,
  className,
  ...rest
}: any) {
  return (
    <div {...rest} className={`dismissible-prompt ${className}`}>
      <div className="dismissible-prompt__children">{children}</div>
      <Button
        types={["icon-only", "collapse"]}
        className="dismissible-prompt__close"
        onClick={onDismiss}
      >
        <Icon name="cross" />
      </Button>
    </div>
  );
}

DismissiblePrompt.defaultProps = {
  className: "",
};

export default DismissiblePrompt;
