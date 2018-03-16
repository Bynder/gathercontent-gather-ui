import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Dropdown from 'react-bootstrap/lib/Dropdown';

const DueDateTime = props => {
  const minutes = ['00', '15', '30', '45'];
  const hours = Array.from({ length: 24 }, (x, i) => i);
  const setTime = props.setTime;

  const times = hours.map(hour =>
    minutes.map(minute => {
      let suffix = 'AM';
      let hourValue = hour;

      if (hour === 12) {
        suffix = 'PM';
      }

      if (hour === 0) {
        hourValue = 12;
      }

      if (hour > 12) {
        hourValue = hour - 12;
        suffix = 'PM';
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
      <Dropdown.Toggle
        className="button button--link-default button--collapse duedate__time"
        noCaret
      >
        {props.time}
      </Dropdown.Toggle>
      <Dropdown.Menu className="duedate__time-picker">{times}</Dropdown.Menu>
    </Dropdown>
  );
};

DueDateTime.propTypes = {
  setTime: PropTypes.func.isRequired,
  time: PropTypes.string
};

DueDateTime.defaultProps = {
  time: ''
};

export default DueDateTime;
