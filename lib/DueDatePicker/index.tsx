import React, { useState, useEffect } from "react";
import moment from "moment";
import cx from "classnames";
import { Calendar } from "lib";
import Button from "../Button";
import Dropdown from "../Dropdown";
import DueDateHeader from "./DueDateHeader";
import DueDateButton from "./DueDateButton";

export function DueDatePicker({
  applyDueDate,
  removeDueDate,
  dueDate,
  children,
  completed,
  userCanSetDueDate,
  autoPosition,
  triggerButtonTypes,
  today,
}: any) {
  const defaultSelectedDay = dueDate ? dueDate.toDate() : null;
  const defaultSelectedTime = dueDate
    ? moment(dueDate)
    : moment().set({ hours: 17, minutes: 0 });

  const [changed, setChanged] = useState(false);
  const [selectedDay, setSelectedDay] = useState(defaultSelectedDay);
  const [selectedTime, setSelectedTime] = useState(defaultSelectedTime);

  const resetState = () => {
    setChanged(false);
    setSelectedDay(defaultSelectedDay);
    setSelectedTime(defaultSelectedTime);
  };

  useEffect(() => {
    resetState();
  }, [dueDate]);

  const handleApplyDueDate = (hideDropdown: any) => {
    if (selectedDay) {
      const newDueDate = moment(selectedDay).set({
        hour: selectedTime.hour(),
        minute: selectedTime.minute(),
      });
      applyDueDate(newDueDate);

      hideDropdown();
      resetState();
    }
  };

  const handleRemoveDueDate = (hideDropdown: any) => {
    removeDueDate();
    // @ts-expect-error TS(2345): Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
    setChanged(null);
    setSelectedDay(null);
    hideDropdown();
  };

  const handleDayClick = (day: any, { selected }: any) => {
    if (!selected) {
      setSelectedDay(day);
      setChanged(true);
    }
  };

  const handleTimeClick = (time: any) => {
    setSelectedTime(moment(time));
    setChanged(true);
  };

  const classes = cx("duedate__container is-active", {
    "duedate__container--completed": completed,
  });

  const buttonClasses = cx("duedate__submit", {
    "duedate__submit--hidden": !changed,
  });

  return (
    <span className={classes}>
      <Dropdown
        id="duedate__dropdown"
        autoPosition={autoPosition}
        onToggle={resetState}
      >
        {({ setShowContent }) => (
          <>
            <DueDateButton
              dueDate={dueDate}
              userCanSetDueDate={userCanSetDueDate}
              types={triggerButtonTypes}
            >
              {children}
            </DueDateButton>

            {userCanSetDueDate && (
              <Dropdown.Content className="duedate__dropdown">
                {(showContent: any) =>
                  showContent ? (
                    <>
                      <DueDateHeader
                        dueDate={selectedDay}
                        dueTime={selectedTime}
                        setTime={handleTimeClick}
                        removeDueDate={() =>
                          handleRemoveDueDate(() => setShowContent(false))
                        }
                      />
                      <div className="duedate__datepicker">
                        <Calendar
                          onDayClick={handleDayClick}
                          selectedDay={selectedDay}
                          enableWeekendDays
                          leftAlignHeader
                          today={today}
                        />
                        <div className={buttonClasses}>
                          <Button
                            clickHandler={() => setShowContent(false)}
                            types={["link-default", "collapse"]}
                            className="duedate__submit--cancel"
                          >
                            Cancel
                          </Button>
                          <Button
                            clickHandler={() =>
                              handleApplyDueDate(() => setShowContent(false))
                            }
                            types={["primary"]}
                            className="duedate__submit--save"
                          >
                            Set due date
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : null
                }
              </Dropdown.Content>
            )}
          </>
        )}
      </Dropdown>
    </span>
  );
}

DueDatePicker.defaultProps = {
  dueDate: null,
  children: null,
  completed: false,
  userCanSetDueDate: true,
  autoPosition: false,
  triggerButtonTypes: [],
};

export default DueDatePicker;
