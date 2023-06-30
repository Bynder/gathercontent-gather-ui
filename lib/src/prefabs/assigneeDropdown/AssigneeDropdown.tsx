import React from "react";
import {
  DropdownContent,
  Dropdown,
  ButtonIcon,
  ButtonSecondary,
  ButtonSecondaryDanger,
  ButtonTertiary,
  Input,
  TooltipWrapper,
  useLoader,
} from "lib";
import Icon from "../../../Icon";

export function AssigneeDropdown({
  id,
  children,
  onUnassignAllClick,
  onSaveClick,
  searchValue,
  onSearchChange,
  onToggle,
  autoPosition,
  className,
}: any) {
  const [isSubmitting, handleSubmitWithLoader] = useLoader(onSaveClick);
  const [isUnassigning, handleUnassignWithLoader] =
    useLoader(onUnassignAllClick);

  return (
    <Dropdown
      autoPosition={autoPosition}
      id={id}
      onToggle={onToggle}
      className={className}
    >
      {({ showContent, setShowContent }: any) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }: any) => (
              <TooltipWrapper
                id={`assignee-dropdown-tooltip-${id}`}
                tooltipText="Change assignees"
                placement="top"
              >
                <ButtonIcon
                  name="userPlus"
                  active={showContent}
                  size={ButtonIcon.sizes.sm}
                  onClick={toggleShowContent}
                  // @ts-expect-error
                  title="Change assignees"
                />
              </TooltipWrapper>
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content
              noTransform
              autoPositionLeft
              collapse
              className="w-80"
            >
              <DropdownContent className="max-h-128">
                <DropdownContent.Header id={id} title="Assign to workflow">
                  <Input
                    id={`${id}-search`}
                    value={searchValue}
                    onChange={onSearchChange}
                    // @ts-expect-error
                    className="mt-2"
                    placeholder="Search..."
                  />
                </DropdownContent.Header>
                <DropdownContent.Body>{children}</DropdownContent.Body>
                <DropdownContent.Footer className="flex">
                  <ButtonSecondaryDanger
                    size={ButtonSecondaryDanger.sizes.sm}
                    onClick={async (e: any) => {
                      // @ts-expect-error
                      await handleUnassignWithLoader(e);
                      setShowContent(false);
                    }}
                  >
                    {isUnassigning && <Icon name="loader16" className="mr-2" />}
                    Unassign all
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
                        // @ts-expect-error
                        await handleSubmitWithLoader(e);
                        setShowContent(false);
                      }}
                    >
                      {isSubmitting && (
                        <Icon name="loader16" className="mr-2" />
                      )}
                      Save
                    </ButtonSecondary>
                  </div>
                </DropdownContent.Footer>
              </DropdownContent>
            </Dropdown.Content>
          )}
        </>
      )}
    </Dropdown>
  );
}
