import React from "react";
import moment from "moment";
import { DateSetTimeDropdown } from "./DateSetTimeDropdown";

export function DateSet({ className, date, time, onTimeSelect, subtext }: any) {
  if (!date) {
    return null;
  }
  return (
    <div className={`gui-date-set ${className}`}>
      <div className="gui-date-set-date">
        {moment(date).format("MMMM DD, YYYY")}
        {` at `}
        <DateSetTimeDropdown selectedTime={time} onTimeSelect={onTimeSelect} />
      </div>
      {!!subtext && <div className="gui-date-set-subtext">{subtext}</div>}
    </div>
  );
}
