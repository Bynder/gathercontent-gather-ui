import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TagUserFormUser from './TagUserFormUser';
import { UserSearch } from '../../../lib';

const TagUserFormUsers = props => {
  if (props.lockedUsers.length === 0 && props.addedUsers.length === 0) {
    return (
      <UserSearch
        users={props.users}
        displayEmail
        addUser={props.addUser}
        searchHeading="Notify..."
        triggerText="Add people to notify..."
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
    <Fragment>
      <div className="taguser__search">
        <UserSearch
          className="taguser__search-dropdown"
          users={props.users}
          displayEmail
          addUser={props.addUser}
          searchHeading="Notify..."
          dropdownAutoPosition={props.dropdownAutoPosition}
        />
      </div>
      {lockedUsers} {users}
    </Fragment>
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
