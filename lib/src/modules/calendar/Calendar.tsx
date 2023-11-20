import React from "react";
import { DayPicker } from "react-day-picker";

import cx from "classnames";

export function Calendar({
  onDayClick,
  selectedDay,
  className,
  enableWeekendDays = false,
  containerClassName = "",
  today,
}: any) {
  const classes = cx("gui-calendar", className);
  const containerClasses = cx("gui-calendar-container", containerClassName);
  const modifiers = {
    past: (day: any) => day < today,
  };

  if (enableWeekendDays === false) {
    // @ts-expect-error TS(2339): Property 'weekend' does not exist on type '{ past:... Remove this comment to see the full error message
    modifiers.weekend = {
      daysOfWeek: [0, 6],
    };
  }

  const weekdayText = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDayOfWeekLabel = (dateObject: any) => {
    const dayOfWeekNumber = dateObject.getDay();
    return weekdayText[dayOfWeekNumber];
  };

  return (
    <div className={containerClasses}>
      <DayPicker
        mode="single"
        className={classes}
        modifiers={modifiers}
        // @ts-expect-error TS(2322): Type '{ mode: "single"; className: string; modifie... Remove this comment to see the full error message
        firstDayOfWeek={1}
        weekdaysShort={weekdayText}
        onDayClick={onDayClick}
        selected={selectedDay || today}
        defaultMonth={selectedDay}
        showOutsideDays
        today={today}
        formatters={{
          formatWeekdayName: (dateObject) => getDayOfWeekLabel(dateObject),
        }}
        modifiersClassNames={{
          past: "rdp-day_past",
        }}
        captionLayout="buttons"
      />
    </div>
  );
}
