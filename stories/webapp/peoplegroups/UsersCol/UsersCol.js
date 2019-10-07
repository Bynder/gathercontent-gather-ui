import React from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import UsersHeader from './UsersHeader';
import UsersTable from './UsersTable';
import { ALL_USERS, PENDING_USERS } from '../consts';

const UsersCol = ({
  users,
  guestUsers,
  pendingUsers,
  roles,
  activeState,
  setActiveState,
  setActiveUser
}) => {
  const activeUsers = () => {
    if (activeState === ALL_USERS) {
      return users;
    }
    if (activeState === PENDING_USERS) {
      return pendingUsers;
    }
    return guestUsers;
  };
  return (
    <>
      <UsersHeader
        userCount={users.length}
        guestCount={guestUsers.length}
        pendingCount={pendingUsers.length}
        setActiveState={setActiveState}
        activeState={activeState}
      />
      <UsersTable
        users={activeUsers()}
        activeState={activeState}
        roles={roles}
        setActiveState={setActiveState}
        setActiveUser={setActiveUser}
      />
    </>
  );
};

UsersCol.propTypes = {
  roles: arrayOf(shape()).isRequired,
  users: arrayOf(shape()).isRequired,
  guestUsers: arrayOf(shape()).isRequired,
  pendingUsers: arrayOf(shape()).isRequired,
  activeState: string.isRequired,
  setActiveState: func.isRequired,
  setActiveUser: func.isRequired
};

export default UsersCol;
