import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon";

export function DueDateLabel({ overdue, children }: any) {
  if (!children) {
    return (
      <span className="duedate__label duedate__label--button">
        No due date set
      </span>
    );
  }

  const classNames = cx("duedate__label", {
    "color-overdue": overdue,
  });

  return (
    <div className={classNames}>
      {overdue && <Icon name="warning" />}
      <span>
        {`Due `}
        <span className="duedate__label--button">{children}</span>
      </span>
    </div>
  );
}

DueDateLabel.propTypes = {
  children: PropTypes.node,
  overdue: PropTypes.bool,
};

DueDateLabel.defaultProps = {
  children: null,
  overdue: false,
};

export default DueDateLabel;
