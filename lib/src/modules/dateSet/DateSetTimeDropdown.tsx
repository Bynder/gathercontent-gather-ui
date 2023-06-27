import React from 'react';
import uuid from 'uuid/v1';
import { ButtonSecondary, Dropdown, Icon } from 'lib';

export function DateSetTimeDropdown({ onTimeSelect, selectedTime }) {
  const getTimes = () => {
    const times = [];

    const minutes = ['00', '15', '30', '45'];
    const hours = Array.from({ length: 24 }, (x, i) => i);

    hours.map(hour =>
      minutes.map(minute => {
        const suffix = hour >= 12 ? 'PM' : 'AM';
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
          text: `${twelveHour}:${minute} ${suffix}`
        });
      })
    );

    return times;
  };

  const times = getTimes();

  return (
    <Dropdown id={`date-set-time-${uuid()}`}>
      {({ showContent }) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <ButtonSecondary
                onClick={toggleShowContent}
                size={ButtonSecondary.sizes.sm}
                className="ml-2"
                contained
                title="Select a time"
              >
                {selectedTime}
                <Icon name="down" className="ml-2" types={['dark']} />
              </ButtonSecondary>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content top collapse className="dropdown-max-height">
              {times.map(({ key, text }) => (
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
  selectedTime: '5:00 PM'
};
