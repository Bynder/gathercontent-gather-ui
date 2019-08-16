import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectedObjectsProvider, WindowingProvider } from 'lib';
import { HierarchyCollection } from './HierarchyCollection';
import { data, open, statusColor } from './data';

const stories = storiesOf('Web app', module);

stories.add('Hierarchy', () => {
  return (
    <WindowingProvider
      style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
      itemsLength={data.count}
      itemHeight={50}
      offset={20}
    >
      <SelectedObjectsProvider>
        <HierarchyCollection
          hierarchyData={data}
          statusColor={statusColor}
          index={-1}
          open={open}
        />
      </SelectedObjectsProvider>
    </WindowingProvider>
  );
});
