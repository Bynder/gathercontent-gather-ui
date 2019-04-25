import React from 'react';
import PropTypes from 'prop-types';
import TagUserFormUser from './TagUserFormUser';
import { UserSearchDropdown } from '../..';

const TagUserFormUsers = props => {
  if (props.lockedUsers.length === 0 && props.addedUsers.length === 0) {
    return (
      <UserSearchDropdown
        tooltipText="Add people"
        users={props.users}
        displayEmail
        addUser={props.addUser}
        searchHeading="Notify..."
        dropdownAutoPosition={props.dropdownAutoPosition}
      />
    );
  }

  const lockedUsers = props.lockedUsers.map(user => (
    <TagUserFormUser
      user={user}
      isLocked
      lockedUserTooltip={props.lockedUserTooltip}
      key={user.id}
    />
  ));

  const users = props.addedUsers.map(user => (
    <TagUserFormUser user={user} removeUser={props.removeUser} key={user.id} />
  ));

  return (
    <div className="taguser__users-wrapper">
      <div className="taguser__search">
        <UserSearchDropdown
          tooltipText="Add people"
          className="taguser__search-dropdown"
          users={props.users}
          displayEmail
          addUser={props.addUser}
          searchHeading="Notify..."
          dropdownAutoPosition={props.dropdownAutoPosition}
        />
      </div>
      <div className="taguser__users">
        {lockedUsers} {users}
      </div>
    </div>
  );
};

TagUserFormUsers.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addedUsers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  lockedUsers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dropdownAutoPosition: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
  lockedUserTooltip: PropTypes.string.isRequired
};

export default TagUserFormUsers;
