import React, { useContext } from "react";
import { ButtonIcon, Comment } from "lib";
import Dropdown from "../Dropdown";
import DropdownActionGroup from "../Dropdown/DropdownActionGroup";

function CommentActions({ onEditClick, onRemoveClick, className }: any) {
  const { setIsEditing, setIsDeleting, isOpen }: any = useContext(
    Comment.Context
  );
  const metaClass = "pr-12";

  return isOpen ? (
    <div className={className}>
      <Dropdown id="comment-actions">
        {({ showContent }: any) => (
          <>
            <Dropdown.Trigger>
              {({ toggleShowContent }: any) => (
                <ButtonIcon
                  name="menuDotted"
                  active={showContent}
                  size={ButtonIcon.sizes.sm}
                  onClick={toggleShowContent}
                  title="Edit or delete this comment"
                />
              )}
            </Dropdown.Trigger>
            <Dropdown.Content collapse right>
              <DropdownActionGroup>
                <Dropdown.Action
                  className={metaClass}
                  action={() => {
                    onEditClick();
                    setIsEditing(true);
                  }}
                >
                  Edit...
                </Dropdown.Action>
                <Dropdown.Action
                  className={metaClass}
                  action={() => {
                    onRemoveClick();
                    setIsDeleting(true);
                  }}
                  danger
                >
                  Delete
                </Dropdown.Action>
              </DropdownActionGroup>
            </Dropdown.Content>
          </>
        )}
      </Dropdown>
    </div>
  ) : null;
}

CommentActions.defaultProps = {
  onEditClick: () => {},
  onRemoveClick: () => {},
};

export { CommentActions };
