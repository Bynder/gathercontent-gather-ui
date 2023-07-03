// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from 'uuid/v4';

export const createData = (parents: any, children: any) => {
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
  const byId = allIds.reduce((acc: any, value: any, index: any) => {
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
