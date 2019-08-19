import React from 'react';
import { storiesOf } from '@storybook/react';
import { SelectionProvider } from 'lib';
import { HierarchyCollection } from './HierarchyCollection';
import { data, open, statusColor } from './data';

const stories = storiesOf('Web app', module);

stories.add('Hierarchy', () => {
  return (
    <SelectionProvider>
      <HierarchyCollection
        hierarchyData={data}
        statusColor={statusColor}
        index={-1}
        open={open}
      />
    </SelectionProvider>
  );
});
