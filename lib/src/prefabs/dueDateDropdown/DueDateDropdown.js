import React from 'react';
import {
  Dropdown,
  Calendar,
  DateSet,
  DropdownContent,
  ButtonTertiary,
  ButtonSecondary,
  ButtonSecondaryDanger,
  ButtonIcon,
  TooltipWrapper,
  useLoader
} from 'lib';
import Icon from '../../../Icon';

export function DueDateDropdown({
  id,
  onDaySelect,
  selectedDay,
  selectedTime,
  onTimeSelect,
  onSaveClick,
  onRemoveClick,
  onToggle,
  autoPosition,
  disableRemoveButton,
  workflowDueDate
}) {
  const [isSubmitting, handleSubmitWithLoader] = useLoader(onSaveClick);
  const [isRemoving, handleRemoveClick] = useLoader(onRemoveClick);

  return (
    <Dropdown id={id} autoPosition={autoPosition} onToggle={onToggle}>
      {({ showContent, setShowContent }) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <TooltipWrapper
                id={`due-date-dropdown-tooltip-${id}`}
                tooltipText="Set a due date"
                placement="top"
              >
                <ButtonIcon
                  name="calendar"
                  active={showContent}
                  size={ButtonIcon.sizes.sm}
                  onClick={toggleShowContent}
                  title="Set a due date"
                />
              </TooltipWrapper>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content
              collapse
              autoPositionLeft
              noTransform
              className="w-80"
            >
              {workflowDueDate ? (
                <Dropdown.Info>
                  <div className="flex items-center gap-4">
                    <Icon name="infoSquare" />
                    <p className="mt-0 text-neutral-primary">
                      {`A dynamic due date of ${
                        workflowDueDate.dynamic.amount
                      } ${
                        workflowDueDate.dynamic.interval
                      } has been scheduled by the workflow.`}{' '}
                      <a href="https://help.gathercontent.com/en/articles/7041381-automated-due-dates">
                        What's this?
                      </a>
                    </p>
                  </div>
                </Dropdown.Info>
              ) : null}
              <DropdownContent.Body>
                <Calendar
                  onDayClick={onDaySelect}
                  selectedDay={selectedDay}
                  leftAlignHeader
                  enableWeekendDays
                />
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
                  onClick={async e => {
                    await handleRemoveClick(e);
                    setShowContent(false);
                  }}
                  disabled={disableRemoveButton}
                >
                  {isRemoving && <Icon name="loader16" className="mr-2" />}
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
                    onClick={async e => {
                      await handleSubmitWithLoader(e);
                      setShowContent(false);
                    }}
                  >
                    {isSubmitting && <Icon name="loader16" className="mr-2" />}
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
