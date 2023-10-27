import React from "react";
import cx from "classnames";
import Icon from "../Icon";

export function DueDateLabel({ overdue, children }: any) {
  if (!children) {
    return (
      <span className="gui-duedate__label gui-duedate__label--button">
        No due date set
      </span>
    );
  }

  const classNames = cx("gui-duedate__label", {
    "gui-color-overdue": overdue,
  });

  return (
    <div className={classNames}>
      {overdue && <Icon name="warning" />}
      <span>
        {`Due `}
        <span className="gui-duedate__label--button">{children}</span>
      </span>
    </div>
  );
}

DueDateLabel.defaultProps = {
  children: null,
  overdue: false,
};

export default DueDateLabel;
