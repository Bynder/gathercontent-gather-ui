import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';

export function Calendar({ onDayClick, selectedDay, className }) {
  const today = moment().set({ hour: 0, minute: 0 });

  const modifiers = {
    weekend: {
      daysOfWeek: [0, 6]
    },
    past: day => day < today
  };

  const weekdayText = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={`calendar ${className}`}>
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
