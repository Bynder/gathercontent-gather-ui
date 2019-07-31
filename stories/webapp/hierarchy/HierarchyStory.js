import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, text } from '@storybook/addon-knobs';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyCollection } from './HierarchyCollection';

const stories = storiesOf('Web app', module);

stories.add('Hierarchy', () => {
  const open = boolean('Open all folders by default', true);
  const statusColor = text('Status colour', 'green');

  return (
    <div>
      <HierarchyFolderRow childCount={1000} open={open}>
        <HierarchyCollection
          levelCount={number('Total number of levels', 4)}
          maxItemCount={number('Max number of items', 10)}
          index={0}
          open={open}
          statusColor={statusColor}
        />
      </HierarchyFolderRow>
    </div>
  );
});
