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
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
} from 'lib';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'plur... Remove this comment to see the full error message
import pluralize from 'pluralize';
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
  workflowDueDate,
  today,
  defaultDueDate,
  defaultTime
}: any) {
  const [isSubmitting, handleSubmitWithLoader] = useLoader(onSaveClick);
  const [isRemoving, handleRemoveClick] = useLoader(onRemoveClick);

  return (
    <Dropdown id={id} autoPosition={autoPosition} onToggle={onToggle}>
      {({
        showContent,
        setShowContent
      }: any) => (
        <>
          <Dropdown.Trigger>
            {({
              toggleShowContent
            }: any) => (
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
              {!!workflowDueDate?.dynamic && (
                <Dropdown.Info>
                  <div className="flex items-center gap-4">
                    <Icon name="infoSquare" />
                    <p className="mt-0 text-neutral-20">
                      {`A dynamic due date of ${pluralize(
                        workflowDueDate.dynamic.interval,
                        workflowDueDate.dynamic.amount,
                        true
                      )} has been scheduled by the workflow.`}{' '}
                      <a href="https://help.gathercontent.com/en/articles/7041381-automated-due-dates">
                        What's this?
                      </a>
                    </p>
                  </div>
                </Dropdown.Info>
              )}
              {!!workflowDueDate?.fixed && (
                <Dropdown.Info>
                  <div className="flex items-center gap-4">
                    <Icon name="infoSquare" />
                    <p className="mt-0 text-neutral-20">
                      {`A fixed due date has been set by the workflow.`}{' '}
                      <a href="https://help.gathercontent.com/en/articles/7041381-automated-due-dates">
                        What's this?
                      </a>
                    </p>
                  </div>
                </Dropdown.Info>
              )}
              <DropdownContent.Body>
                <Calendar
                  onDayClick={onDaySelect}
                  selectedDay={selectedDay || defaultDueDate || today}
                  leftAlignHeader
                  enableWeekendDays
                  today={today}
                />
                <DateSet
                  date={selectedDay || defaultDueDate || today}
                  time={selectedTime || defaultTime || '5:00 PM'}
                  onTimeSelect={onTimeSelect}
                  className="p-4 border border-solid border-b-0 border-l-0 border-r-0 border-neutral-90"
                />
              </DropdownContent.Body>
              <DropdownContent.Footer className="flex">
                <ButtonSecondaryDanger
                  size={ButtonSecondaryDanger.sizes.sm}
                  onClick={async (e: any) => {
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
                    onClick={async (e: any) => {
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
