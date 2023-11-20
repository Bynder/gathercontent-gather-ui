import React from "react";
import moment from "moment";
import cx from "classnames";
import Icon from "../Icon";
import Dropdown from "../Dropdown";

function DueDateButton({ children, ...props }: any) {
  if (!props.dueDate && !props.userCanSetDueDate) {
    return null;
  }

  const buttonTypes = ["link-default", "collapse", ...props.types];

  if (children || !props.dueDate) {
    return (
      <Dropdown.Trigger
        className="gui-duedate__button gui-duedate__button--set-duedate gui-duedate__toggle"
        useButton
        types={buttonTypes}
      >
        <span>{children || "Set due date"}</span>
      </Dropdown.Trigger>
    );
  }

  const overdue = props.dueDate < moment();

  const classes = cx("gui-duedate__button", {
    "gui-color-overdue": overdue,
  });

  if (!props.userCanSetDueDate) {
    return (
      <span className={classes}>
        {overdue && <Icon name="warning" />}
        Due to be completed {props.dueDate.fromNow()}
      </span>
    );
  }

  return (
    <span className={classes}>
      {overdue && <Icon name="warning" />}
      {`Due to be completed `}
      <Dropdown.Trigger
        className="gui-duedate__toggle"
        useButton
        types={buttonTypes}
      >
        {props.dueDate.fromNow()}
      </Dropdown.Trigger>
    </span>
  );
}

DueDateButton.defaultProps = {
  dueDate: null,
  children: null,
  types: [],
};

export default DueDateButton;
