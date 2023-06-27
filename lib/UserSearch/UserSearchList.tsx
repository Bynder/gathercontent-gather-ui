import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import Avatar from "../Avatar";
import AvatarInformation from "../Avatar/AvatarInformation";
import UserSearchListUserName from "./UserSearchListUserName";

const UserSearchList = ({
  users,
  addUser,
  displayEmail,
  selectedUserIds,
  noUsers,
  noUserDisplay,
  hideAfterPerformingAction,
}: any) => {
  if (users.length <= 0 && !noUsers) {
    return (
      <Dropdown.ActionGroup className="user-search__search-results">
        <span className="no-results">Oops! No people found.</span>
      </Dropdown.ActionGroup>
    );
  }
  return (
    <ul className="user-search-list h-padding-clear h-margin-clear">
      {users.map((user: any) => (
        <li className="user-search-list__user" key={user.id}>
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
              />
            </Avatar>
          </Dropdown.Action>
        </li>
      ))}
      {noUsers && (
        <Dropdown.ActionGroup className="user-search__search-results">
          <span className="no-results">{noUserDisplay}</span>
        </Dropdown.ActionGroup>
      )}
    </ul>
  );
};

UserSearchList.propTypes = {
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addUser: PropTypes.func.isRequired,
  displayEmail: PropTypes.bool.isRequired,
  selectedUserIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  noUsers: PropTypes.bool.isRequired,
  noUserDisplay: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    .isRequired,
  hideAfterPerformingAction: PropTypes.bool.isRequired,
};

export default UserSearchList;
