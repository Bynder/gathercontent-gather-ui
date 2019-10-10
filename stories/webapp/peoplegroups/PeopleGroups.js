import React, { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { FinderPanelLayout } from 'lib';
import GroupsCol from './GroupsCol/GroupsCol';
import UsersCol from './UsersCol/UsersCol';
import IndividualUser from './IndividualUser/IndividualUser';
import PeopleGroupTopbar from './PeopleGroupTopbar';
import { ALL_USERS, USER_PROJECTS, USER_ACTIVITY } from './consts';

const PeopleGroups = ({
  groups,
  roles,
  users,
  guestUsers,
  pendingUsers,
  projects,
  data
}) => {
  const [activeState, setActiveState] = useState(ALL_USERS);
  const [activeUser, setActiveUser] = useState('');
  return (
    <>
      <PeopleGroupTopbar />
      <FinderPanelLayout>
        <FinderPanelLayout.Left
          style={{
            top: '74px'
          }}
        >
          <GroupsCol groups={groups} />
        </FinderPanelLayout.Left>
        <FinderPanelLayout.Right>
          {activeState === USER_PROJECTS || activeState === USER_ACTIVITY ? (
            <IndividualUser
              activeState={activeState}
              setActiveState={setActiveState}
              projects={projects}
              activeUser={activeUser}
              roles={roles}
              users={data.users}
            />
          ) : (
            <UsersCol
              users={users}
              guestUsers={guestUsers}
              pendingUsers={pendingUsers}
              roles={roles}
              activeState={activeState}
              setActiveState={setActiveState}
              setActiveUser={setActiveUser}
            />
          )}
        </FinderPanelLayout.Right>
      </FinderPanelLayout>
    </>
  );
};

PeopleGroups.propTypes = {
  groups: arrayOf(shape()).isRequired,
  roles: arrayOf(shape()).isRequired,
  users: arrayOf(shape()).isRequired,
  guestUsers: arrayOf(shape()).isRequired,
  pendingUsers: arrayOf(shape()).isRequired,
  projects: arrayOf(shape()).isRequired,
  data: shape().isRequired
};

export default PeopleGroups;
