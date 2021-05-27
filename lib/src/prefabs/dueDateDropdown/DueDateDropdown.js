import React from 'react';
import {
  Dropdown,
  Calendar,
  DateSet,
  DropdownContent,
  ButtonTertiary,
  ButtonSecondary,
  ButtonSecondaryDanger,
  ButtonIcon
} from 'lib';

export function DueDateDropdown({
  id,
  onDaySelect,
  selectedDay,
  selectedTime,
  onTimeSelect,
  onSaveClick,
  onRemoveClick,
  onToggle
}) {
  return (
    <Dropdown id={id} autoPosition onToggle={onToggle}>
      {({ showContent, setShowContent }) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <ButtonIcon
                name="clock"
                active={showContent}
                size={ButtonIcon.sizes.sm}
                onClick={toggleShowContent}
                title="Edit or delete this comment"
              />
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content collapse noTransform className="w-80">
              <DropdownContent.Header title="Due date" />
              <DropdownContent.Body>
                <Calendar onDayClick={onDaySelect} selectedDay={selectedDay} />
                <DateSet
                  date={selectedDay}
                  time={selectedTime}
                  onTimeSelect={onTimeSelect}
                  className="p-4 border border-solid border-b-0 border-l-0 border-r-0 border-neutral-90"
                />
              </DropdownContent.Body>
              <DropdownContent.Footer className="flex">
                <ButtonSecondaryDanger
                  size={ButtonSecondaryDanger.sizes.sm}
                  onClick={onRemoveClick}
                >
                  Remove
                </ButtonSecondaryDanger>
                <div className="ml-auto flex">
                  <ButtonTertiary
                    onClick={() => setShowContent(false)}
                    size={ButtonTertiary.sizes.sm}
                    className="mr-2"
                  >
                    Cancel
                  </ButtonTertiary>
                  <ButtonSecondary
                    size={ButtonSecondary.sizes.sm}
                    onClick={onSaveClick}
                  >
                    Save
                  </ButtonSecondary>
                </div>
              </DropdownContent.Footer>
            </Dropdown.Content>
          )}
        </>
      )}
    </Dropdown>
  );
}
