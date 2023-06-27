import uuid from 'uuid/v4';

export const createData = (parents, children) => {
  const parentIds = [...new Array(parents)].map(() => uuid());
  const byParentIds = parentIds.reduce(
    (acc, value) => ({
      ...acc,
      [value]: [...new Array(children)].map(() => uuid())
    }),
    {}
  );

  const allIds = parentIds.reduce(
    (acc, value) => [...acc, value, ...byParentIds[value]],
    []
  );

  let depth = 0;
  const byId = allIds.reduce((acc, value, index) => {
    const lastId = allIds[index - 1];
    if (parentIds.indexOf(lastId) > -1) {
      depth += 1;
    }

    return {
      ...acc,
      [value]: {
        id: value,
        name: parentIds.indexOf(value) > -1 ? 'Folder' : 'Item',
        depth
      }
    };
  }, {});

  return { allIds, byId, parentIds };
};
