import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';

import cx from 'classnames';

export function Calendar({
  onDayClick,
  selectedDay,
  className,
  enableWeekendDays = false,
  leftAlignHeader = false
}) {
  const today = moment().set({ hour: 0, minute: 0 });

  const modifiers = {
    past: day => day < today
  };

  if (enableWeekendDays === false) {
    modifiers.weekend = {
      daysOfWeek: [0, 6]
    };
  }

  const weekdayText = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

  const classes = cx(`calendar`, className, {
    'enable-weekend-days': enableWeekendDays,
    'left-align-header': leftAlignHeader
  });

  return (
    <div className={classes}>
      <DayPicker
        modifiers={modifiers}
        firstDayOfWeek={1}
        weekdaysShort={weekdayText}
        onDayClick={onDayClick}
        selectedDays={selectedDay}
        month={selectedDay}
      />
    </div>
  );
}
