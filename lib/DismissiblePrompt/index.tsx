import React from "react";
import { node, string, func } from "prop-types";
import Icon from "../Icon";
import Button from "../Button";

export const DismissiblePrompt = ({
  children,
  onDismiss,
  className,
  ...rest
}: any) => (
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

DismissiblePrompt.propTypes = {
  children: node.isRequired,
  className: string,
  onDismiss: func.isRequired,
};

DismissiblePrompt.defaultProps = {
  className: "",
};

export default DismissiblePrompt;
