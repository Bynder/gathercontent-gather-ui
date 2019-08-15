import React from 'react';
import faker from 'faker';
import uuid from 'uuid/v1';
import { storiesOf } from '@storybook/react';
import { number, boolean, text } from '@storybook/addon-knobs';
import { HierarchyCollection } from './HierarchyCollection';

const stories = storiesOf('Web app', module);

stories.add('Hierarchy', () => {
  const open = boolean('Open all folders by default', true);
  const statusColor = text('Status colour', 'green');
  const levelCount = number('Total number of levels', 4);
  const maxItemCount = number('Max number of items', 10);

  const hierarchyData = [...Array(levelCount).keys()].reduce((acc, value) => {
    return {
      ...acc,
      [value]: {
        name: faker.commerce.department(),
        children: [...Array(maxItemCount).keys()].map(() => ({
          id: uuid(),
          name: faker.commerce.productName(),
          status: {
            color: statusColor
          }
        }))
      }
    };
  }, {});

  return (
    <HierarchyCollection
      hierarchyData={hierarchyData}
      statusColor={statusColor}
      index={-1}
      open={open}
    />
  );
});
