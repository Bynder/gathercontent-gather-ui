import React from 'react';
import { number } from '@storybook/addon-knobs';
import {
  createData,
  getUsers,
  getGuestUsers,
  getPendingUsers,
  getAllProjects,
} from './data';
import PeopleGroups from './PeopleGroups';

const stories = storiesOf('Web app', module);

export const PeopleAndGroups = () => {
  const userCount = number('Total number of users', 20);
  const guestUserCount = number('Total number of guest users', 4);
  const pendingUserCount = number('Total number of pending users', 2);
  const groupCount = number('Total number of groups', 8);
  const roleCount = number('Total number of roles', 6);

  const data = createData(
    userCount,
    guestUserCount,
    pendingUserCount,
    groupCount,
    roleCount
  );

  const users = getUsers(data);
  const guestUsers = getGuestUsers(data);
  const pendingUsers = getPendingUsers(data);
  const projects = getAllProjects(data);
  return (
    <PeopleGroups
      groups={data.groups}
      roles={data.roles}
      users={users}
      data={data}
      guestUsers={guestUsers}
      pendingUsers={pendingUsers}
      projects={projects}
    />
  );
};

PeopleAndGroups.story = {
  name: 'PeopleAndGroups',
};
