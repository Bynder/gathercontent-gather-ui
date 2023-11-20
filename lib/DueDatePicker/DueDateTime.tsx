import React from "react";
import { MenuItem, Dropdown } from "lib";

function DueDateTime(props: any) {
  const minutes = ["00", "15", "30", "45"];
  const hours = Array.from({ length: 24 }, (x, i) => i);
  const { setTime } = props;

  const times = hours.map((hour) =>
    minutes.map((minute) => {
      let suffix = "AM";
      let hourValue = hour;

      if (hour === 12) {
        suffix = "PM";
      }

      if (hour === 0) {
        hourValue = 12;
      }

      if (hour > 12) {
        hourValue = hour - 12;
        suffix = "PM";
      }

      const key = `${hour}:${minute}`;
      const value = `${hourValue}:${minute} ${suffix}`;

      return (
        <MenuItem
          key={key}
          eventKey={{ hours: hour, minutes: minute }}
          active={value === props.time}
          onSelect={setTime}
        >
          {value}
        </MenuItem>
      );
    })
  );

  return (
    <Dropdown id="duedate__header--time">
      <Dropdown.Trigger triggerClassName="gui-button gui-button--link-default gui-button--collapse gui-duedate__time">
        {props.time}
      </Dropdown.Trigger>
      <Dropdown.Content className="gui-duedate__time-picker">
        {times}
      </Dropdown.Content>
    </Dropdown>
  );
}

DueDateTime.defaultProps = {
  time: "",
};

export default DueDateTime;
