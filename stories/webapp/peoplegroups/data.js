import faker from 'faker';
import { generateIdsArray } from '../../helpers/data';

export const createData = (
  userCount,
  guestUserCount,
  pendingUserCount,
  groupCount,
  roleCount
) => {
  const users = generateIdsArray(userCount);
  const guestUsers = generateIdsArray(guestUserCount);
  const pendingUsers = generateIdsArray(pendingUserCount);
  const projectIds = generateIdsArray(8);
  const groups = generateIdsArray(groupCount);
  const roles = generateIdsArray(roleCount).map((id) => ({
    id,
    name: faker.commerce.productAdjective(),
  }));

  const userMapper = (id, isGuest, pending) => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    role: roles[Math.floor(Math.random() * roleCount)].name,
    url: faker.image.cats(),
    authentication: 'Email & password',
    id,
    type: isGuest ? 'guest' : 'user',
    pending,
  });

  const projectMapper = (id) => ({
    id,
    name: faker.company.companyName(),
    itemCount: faker.random.number(),
    projectType: faker.company.bsBuzz(),
    canAccess: faker.random.boolean(),
  });

  const allUserIds = users.concat(guestUsers.concat(pendingUsers));

  return {
    users: {
      byId: allUserIds.reduce((acc, id) => {
        const isGuest = guestUsers.includes(id);
        const isPending = pendingUsers.includes(id);
        return {
          ...acc,
          [id]: userMapper(id, isGuest, isPending),
        };
      }, {}),
      allIds: allUserIds,
    },
    roles,
    groups: groups.map((id) => ({
      id,
      name: faker.name.jobType(),
    })),
    projects: {
      byId: projectIds.reduce(
        (acc, id) => ({
          ...acc,
          [id]: projectMapper(id),
        }),
        {}
      ),
      allIds: projectIds,
    },
  };
};

export const getUser = (users, id) => users.byId[id] || null;

export const getAllUsers = (data) =>
  data.users.allIds.map((id) => getUser(data.users, id));

export const getUsers = (data) =>
  getAllUsers(data).filter((user) => user.type === 'user' && !user.pending);

export const getGuestUsers = (data) =>
  getAllUsers(data).filter((user) => user.type === 'guest');

export const getPendingUsers = (data) =>
  getAllUsers(data).filter((user) => user.pending);

export const getProject = (data, id) => data.projects.byId[id] || null;

export const getAllProjects = (data) =>
  data.projects.allIds.map((id) => getProject(data, id));
