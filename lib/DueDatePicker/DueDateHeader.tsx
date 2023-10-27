import React from "react";
import moment from "moment";
import cx from "classnames";
import DueDateTime from "./DueDateTime";
import Dropdown from "../Dropdown";
import Icon from "../Icon";

function DueDateHeader(props: any) {
  let label = (
    <div className="gui-duedate__header--date gui-duedate__header--date-not-set">
      No due date set
    </div>
  );

  if (props.dueDate) {
    const date = moment(props.dueDate);

    const day = date
      .set({ hour: props.dueTime.hour(), minute: props.dueTime.minute() })
      .calendar(null, {
        sameDay: "[Today at]",
        nextDay: "[Tomorrow at]",
        nextWeek: "dddd [at]",
        lastDay: "[Yesterday at]",
        lastWeek: "[Last] dddd [at]",
        sameElse: "MMMM Do YYYY [at]",
      });

    const time = props.dueTime.local().format("LT");

    const classes = cx("gui-duedate__header--date", {
      "gui-color-overdue": date < moment(),
    });

    label = (
      <div className={classes}>
        {day} <DueDateTime time={time} setTime={props.setTime} />
      </div>
    );
  }

  const dropdownClasses = cx("gui-duedate__remove", {
    "gui-duedate__remove--not-set": !props.dueDate,
  });

  return (
    <div className="gui-duedate__header">
      Due date
      {label}
      <Dropdown className={dropdownClasses} id="duedate__remove">
        <Dropdown.Trigger>
          <Icon name="menuDotted" />
        </Dropdown.Trigger>
        <Dropdown.Content right collapse>
          <Dropdown.ActionGroup>
            <Dropdown.Action
              className="gui-duedate__remove-action"
              action={props.removeDueDate}
              danger
            >
              Remove due date
            </Dropdown.Action>
          </Dropdown.ActionGroup>
        </Dropdown.Content>
      </Dropdown>
    </div>
  );
}

DueDateHeader.defaultProps = {
  dueDate: null,
  dueTime: null,
};

export default DueDateHeader;
