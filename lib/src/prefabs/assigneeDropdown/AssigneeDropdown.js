import React from 'react';
import {
  DropdownContent,
  Dropdown,
  ButtonIcon,
  ButtonSecondary,
  ButtonSecondaryDanger,
  ButtonTertiary,
  Input
} from 'lib';

export function AssigneeDropdown({
  id,
  children,
  onUnassignAllClick,
  onSaveClick,
  searchValue,
  onSearchChange,
  onToggle
}) {
  return (
    <Dropdown id={id} onToggle={onToggle}>
      {({ showContent, setShowContent }) => (
        <>
          <Dropdown.Trigger>
            {({ toggleShowContent }) => (
              <ButtonIcon
                name="person"
                active={showContent}
                size={ButtonIcon.sizes.sm}
                onClick={toggleShowContent}
                title="Edit or delete this comment"
              />
            )}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content collapse className="w-80">
              <DropdownContent className="max-h-128">
                <DropdownContent.Header title="Assignees">
                  <Input
                    id={`${id}-search`}
                    value={searchValue}
                    onChange={onSearchChange}
                    className="mt-2"
                    placeholder="Search..."
                  />
                </DropdownContent.Header>
                <DropdownContent.Body>{children}</DropdownContent.Body>
                <DropdownContent.Footer className="flex">
                  <ButtonSecondaryDanger
                    size={ButtonSecondaryDanger.sizes.sm}
                    onClick={onUnassignAllClick}
                  >
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
                      onClick={onSaveClick}
                    >
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
