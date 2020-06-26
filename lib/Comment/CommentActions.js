import React, { useContext } from 'react';
import { func } from 'prop-types';
import { ButtonIcon, Comment } from 'lib';
import Dropdown from '../Dropdown';
import DropdownActionGroup from '../Dropdown/DropdownActionGroup';

function CommentActions({ onEditClick, onRemoveClick }) {
  const { setIsEditing, setIsDeleting, isOpen } = useContext(Comment.Context);
  const metaClass = 'pr-12';

  return isOpen ? (
    <div className="absolute right-0 top-0">
      <Dropdown id="comment-actions" autoPosition>
        {({ showContent }) => (
          <>
            <Dropdown.Trigger>
              {({ toggleShowContent }) => (
                <ButtonIcon
                  name="menuDotted"
                  active={showContent}
                  size={ButtonIcon.sizes.sm}
                  onClick={toggleShowContent}
                />
              )}
            </Dropdown.Trigger>
            <Dropdown.Content collapse autoPositionLeft>
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

CommentActions.propTypes = {
  onEditClick: func,
  onRemoveClick: func
};

CommentActions.defaultProps = {
  onEditClick: () => {},
  onRemoveClick: () => {}
};

export { CommentActions };
