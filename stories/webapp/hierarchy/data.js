import uuid from 'uuid/v4';
import faker from 'faker';

const createData = ({ levelCount, maxItemCount, statusColor }) => {
  const allFolderIds = [...Array(levelCount).keys()].map(() => uuid());

  let depth = -1;
  return allFolderIds.reduce(
    (acc, id) => {
      const childCount = Math.floor(Math.random() * maxItemCount || 0);
      const allItemIds = [...Array(childCount).keys()].map(() => uuid());
      depth += 1;

      return {
        ...acc,
        allFolderIds,
        foldersById: {
          ...acc.foldersById,
          [id]: {
            id,
            name: faker.commerce.department(),
            depth,
          },
        },
        itemsByParent: {
          ...acc.itemsByParent,
          [id]: allItemIds,
        },
        itemsById: {
          ...acc.itemsById,
          ...allItemIds.reduce(
            (items, itemId) => ({
              ...items,
              [itemId]: {
                id: itemId,
                status: {
                  color: statusColor,
                },
                name: faker.commerce.productName(),
                parentFolderId: id,
              },
            }),
            {}
          ),
        },
        allIds: [...acc.allIds, id, ...allItemIds],
        allItemIds: [...acc.allItemIds, allItemIds],
      };
    },
    {
      allFolderIds: [],
      allItemIds: [],
      foldersById: {},
      itemsByParent: {},
      itemsById: {},
      allIds: [],
    }
  );
};

export { createData };
