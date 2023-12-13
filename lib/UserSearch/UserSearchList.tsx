import React from "react";
import Dropdown from "../Dropdown";
import Avatar from "../Avatar";
import AvatarInformation from "../Avatar/AvatarInformation";
import UserSearchListUserName from "./UserSearchListUserName";

function UserSearchList({
  users,
  addUser,
  displayEmail,
  selectedUserIds,
  noUsers,
  noUserDisplay,
  hideAfterPerformingAction,
}: any) {
  if (users.length <= 0 && !noUsers) {
    return (
      <Dropdown.ActionGroup className="gui-user-search__search-results">
        <span className="gui-no-results">Oops! No people found.</span>
      </Dropdown.ActionGroup>
    );
  }
  return (
    <ul className="gui-user-search-list gui-h-padding-clear gui-h-margin-clear">
      {users.map((user: any) => (
        <li className="gui-user-search-list__user" key={user.id}>
          <Dropdown.Action
            action={() => addUser(user)}
            key={user.id}
            isSubmit={false}
            selected={selectedUserIds.indexOf(user.id) !== -1}
            hideAfterPerformingAction={hideAfterPerformingAction}
          >
            <Avatar url={user.avatar} initials={user.initials}>
              <AvatarInformation
                email={displayEmail ? user.email : `@${user.display}`}
                name={
                  <UserSearchListUserName
                    isSelected={selectedUserIds.indexOf(user.id) !== -1}
                    name={user.name}
                  />
                }
                pending={user.pending}
              />
            </Avatar>
          </Dropdown.Action>
        </li>
      ))}
      {noUsers && (
        <Dropdown.ActionGroup className="gui-user-search__search-results">
          <span className="gui-no-results">{noUserDisplay}</span>
        </Dropdown.ActionGroup>
      )}
    </ul>
  );
}

export default UserSearchList;
