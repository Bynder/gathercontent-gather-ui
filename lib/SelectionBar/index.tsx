import React from "react";
import cx from "classnames";
import { AnimatedWrapper, Row } from "lib";
import SelectionBarAction from "./SelectionBarAction";
import SelectionBarDivider from "./SelectionBarDivider";
import SelectionBarCancel from "./SelectionBarCancel";
import SelectionBarInformation from "./SelectionBarInformation";
import SelectionBarActions from "./SelectionBarActions";
import SelectionBarCounter from "./SelectionBarCounter";

export function SelectionBar({
  fixed,
  autoHide,
  hasSelected,
  children,
  animatableProperties,
  ...rest
}: any) {
  const classNames = cx("gui-selection-bar", {
    "gui-selection-bar--fixed": fixed,
    "gui-selection-bar--auto-hide": autoHide,
    "gui-has-selected": hasSelected,
  });

  return (
    <AnimatedWrapper
      className={classNames}
      animatableProperties={animatableProperties}
      {...rest}
    >
      <Row className="m-0">{children}</Row>
    </AnimatedWrapper>
  );
}

SelectionBar.Information = SelectionBarInformation;
SelectionBar.Cancel = SelectionBarCancel;
SelectionBar.Action = SelectionBarAction;
SelectionBar.Actions = SelectionBarActions;
SelectionBar.Divider = SelectionBarDivider;
SelectionBar.Counter = SelectionBarCounter;

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false,
  animatableProperties: {},
};

export default SelectionBar;
