import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import IndividualUserHead from './IndividualUserHead';
import IndividualUserActivity from './IndividualUserActivity';
import IndividualUserProjects from './IndividualUserProjects';
import { USER_PROJECTS } from '../consts';
import { getUser } from '../data';

const IndividualUser = ({
  activeState,
  setActiveState,
  projects,
  activeUser,
  roles,
  users
}) => {
  const user = getUser(users, activeUser);
  return (
    <>
      <IndividualUserHead
        activeState={activeState}
        setActiveState={setActiveState}
        activeUser={user}
        roles={roles}
      />
      {activeState === USER_PROJECTS ? (
        <IndividualUserProjects activeUser={user} projects={projects} />
      ) : (
        <IndividualUserActivity activeUser={user} />
      )}
    </>
  );
};

IndividualUser.propTypes = {
  activeState: string.isRequired,
  setActiveState: func.isRequired,
  projects: arrayOf(shape()).isRequired,
  activeUser: string.isRequired,
  roles: arrayOf(shape()).isRequired,
  users: arrayOf(shape()).isRequired
};

export default IndividualUser;
