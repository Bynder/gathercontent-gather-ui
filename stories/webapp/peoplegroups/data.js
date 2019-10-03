import uuid from 'uuid/v4';
import faker from 'faker';

const createData = ({ userCount, groupCount, roleCount }) => {
  const users = [...Array(userCount)];
  const groups = [...Array(groupCount)];
  let roles = [...Array(roleCount)];
  roles = roles.map(() => ({
    id: uuid(),
    name: faker.commerce.productAdjective()
  }));
  return {
    users: users.map(() => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      role: roles[Math.floor(Math.random() * Math.floor(roleCount))].name,
      url: faker.image.cats(),
      authentication: 'standard',
      id: uuid()
    })),
    roles,
    groups: groups.map(() => ({
      id: uuid(),
      name: faker.company.companyName()
    }))
  };
};

export default createData;
