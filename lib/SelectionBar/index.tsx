import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { AnimatedWrapper, Row } from "lib";
import SelectionBarAction from "./SelectionBarAction";
import SelectionBarDivider from "./SelectionBarDivider";
import SelectionBarCancel from "./SelectionBarCancel";
import SelectionBarInformation from "./SelectionBarInformation";
import SelectionBarActions from "./SelectionBarActions";
import SelectionBarCounter from "./SelectionBarCounter";

export const SelectionBar = ({
  fixed,
  autoHide,
  hasSelected,
  children,
  animatableProperties,
  ...rest
}: any) => {
  const classNames = cx("selection-bar", {
    "selection-bar--fixed": fixed,
    "selection-bar--auto-hide": autoHide,
    "has-selected": hasSelected,
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
};

SelectionBar.Information = SelectionBarInformation;
SelectionBar.Cancel = SelectionBarCancel;
SelectionBar.Action = SelectionBarAction;
SelectionBar.Actions = SelectionBarActions;
SelectionBar.Divider = SelectionBarDivider;
SelectionBar.Counter = SelectionBarCounter;

SelectionBar.propTypes = {
  hasSelected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  fixed: PropTypes.bool,
  autoHide: PropTypes.bool,
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  animatableProperties: PropTypes.shape(),
};

SelectionBar.defaultProps = {
  fixed: false,
  autoHide: false,
  animatableProperties: {},
};

export default SelectionBar;
