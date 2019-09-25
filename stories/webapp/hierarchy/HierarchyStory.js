import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { SelectionProvider, Windowing } from 'lib';
import { createData } from './data';
import { HierarchyCollection } from './HierarchyCollection';

const stories = storiesOf('Web app', module);

const statusColor = text('Status colour', 'green');
const levelCount = number('Total number of levels', 10);
const maxItemCount = number('Max number of items', 10);

stories.add('Hierarchy', () => {
  const data = createData({ levelCount, maxItemCount, statusColor });
  return (
    <SelectionProvider>
      <Windowing itemHeight={52} allIds={data.allIds} containerHeight="500px">
        <Windowing.Scroller>
          <Windowing.List>
            {({ inViewWindowingIds }) => (
              <HierarchyCollection
                data={data}
                inViewWindowingIds={inViewWindowingIds}
                statusColor={statusColor}
              />
            )}
          </Windowing.List>
        </Windowing.Scroller>
      </Windowing>
    </SelectionProvider>
  );
});
