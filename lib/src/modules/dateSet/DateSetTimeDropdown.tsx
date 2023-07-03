import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from "uuid/v1";
import { ButtonSecondary, Dropdown, Icon } from "lib";

export function DateSetTimeDropdown({ onTimeSelect, selectedTime }: any) {
  const getTimes = () => {
    const times: any = [];

    const minutes = ["00", "15", "30", "45"];
    const hours = Array.from({ length: 24 }, (x, i) => i);

    hours.map((hour) =>
      minutes.map((minute) => {
        const suffix = hour >= 12 ? "PM" : "AM";
        let twelveHour;
        if (hour > 12) {
          twelveHour = hour - 12;
        } else if (hour === 0) {
          twelveHour = 12;
        } else {
          twelveHour = hour;
        }

        return times.push({
          key: `${hour}:${minute}`,
          text: `${twelveHour}:${minute} ${suffix}`,
        });
      })
    );

    return times;
  };

  const times = getTimes();

  return (
    <Dropdown id={`date-set-time-${uuid()}`}>
      {({ showContent }: any) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }: any) => (
              <ButtonSecondary
                onClick={toggleShowContent}
                size={ButtonSecondary.sizes.sm}
                className="ml-2"
                // @ts-expect-error
                contained
                title="Select a time"
              >
                {selectedTime}
                <Icon name="down" className="ml-2" types={["dark"]} />
              </ButtonSecondary>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content top collapse className="dropdown-max-height">
              {times.map(({ key, text }: any) => (
                <Dropdown.Action key={key} action={() => onTimeSelect(text)}>
                  {text}
                </Dropdown.Action>
              ))}
            </Dropdown.Content>
          )}
        </>
      )}
    </Dropdown>
  );
}

DateSetTimeDropdown.defaultProps = {
  selectedTime: "5:00 PM",
};
