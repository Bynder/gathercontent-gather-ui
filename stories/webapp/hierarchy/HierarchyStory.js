import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { SelectionProvider, Windowing } from 'lib';
import { createData } from './data';
import { HierarchyCollection } from './HierarchyCollection';
import { WindowingIdsMock } from '../../../lib/Windowing/stories/WindowingIdsMock';

const stories = storiesOf('Web app', module);

export const Hierarchy = () => {
  const statusColor = text('Status colour', 'green');
  const levelCount = number('Total number of levels', 10);
  const maxItemCount = number('Max number of items', 10);

  const data = createData({ levelCount, maxItemCount, statusColor });

  return (
    <SelectionProvider>
      <WindowingIdsMock allWindowingIds={data.allIds}>
        {({ allWindowingIds, addIds, removeIds }) => (
          <Windowing
            itemHeight={52}
            allIds={allWindowingIds}
            containerHeight="500px"
          >
            <Windowing.Scroller>
              <Windowing.List>
                {({ inViewWindowingIds }) => (
                  <HierarchyCollection
                    data={data}
                    inViewWindowingIds={inViewWindowingIds}
                    statusColor={statusColor}
                    addIds={addIds}
                    removeIds={removeIds}
                  />
                )}
              </Windowing.List>
            </Windowing.Scroller>
          </Windowing>
        )}
      </WindowingIdsMock>
    </SelectionProvider>
  );
};
