import uuid from 'uuid/v4';
import faker from 'faker';
import { boolean, number, text } from '@storybook/addon-knobs';

const open = boolean('Open all folders by default', true);
const statusColor = text('Status colour', 'green');
const levelCount = number('Total number of levels', 4);
const maxItemCount = number('Max number of items', 10);

const allFolderIds = [...Array(levelCount).keys()].map(() => uuid());

const data = allFolderIds.reduce(
  (acc, id) => {
    const childCount = Math.floor(Math.random() * maxItemCount || 0);
    const allItemIds = [...Array(childCount).keys()].map(() => uuid());

    return {
      ...acc,
      allFolderIds,
      foldersById: {
        ...acc.foldersById,
        [id]: {
          id,
          name: faker.commerce.department()
        }
      },
      itemsByParent: {
        ...acc.itemsByParent,
        [id]: allItemIds
      },
      itemsById: {
        ...acc.itemsById,
        ...allItemIds.reduce(
          (items, itemId) => ({
            ...items,
            [itemId]: {
              id: itemId,
              status: {
                color: statusColor
              },
              name: faker.commerce.productName()
            }
          }),
          {}
        )
      },
      allIds: [...acc.allIds, id, ...allItemIds]
    };
  },
  {
    allFolderIds: [],
    foldersById: {},
    itemsByParent: {},
    itemsById: {},
    allIds: []
  }
);

export { open, data, statusColor };
