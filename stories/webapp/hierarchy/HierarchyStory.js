import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { ItemRow, SelectionProvider, Windowing } from 'lib';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { createData } from './data';
import { HierarchyItemRow } from './ItemRow/HierarchyItemRow';

const stories = storiesOf('Web app', module);

const statusColor = text('Status colour', 'green');
const levelCount = number('Total number of levels', 10);
const maxItemCount = number('Max number of items', 10);

stories.add('Hierarchy', () => {
  const data = createData({ levelCount, maxItemCount, statusColor });
  return (
    <SelectionProvider>
      <Windowing itemHeight={52} allIds={data.allIds} containerHeight={500}>
        <Windowing.Scroller>
          <Windowing.List>
            {({ inViewWindowingIds }) =>
              inViewWindowingIds.map(i =>
                data.allFolderIds.indexOf(i) > -1 ? (
                  <Windowing.Item
                    key={i.id}
                    index={data.allIds.indexOf(i)}
                    style={{
                      paddingLeft: `${data.foldersById[i].depth * 40}px`
                    }}
                  >
                    <HierarchyFolderRow
                      id={i}
                      name={data.foldersById[i].name}
                    />
                  </Windowing.Item>
                ) : (
                  <Windowing.Item
                    key={i.id}
                    index={data.allIds.indexOf(i)}
                    style={{
                      paddingLeft: `${(data.foldersById[
                        data.itemsById[i].parentFolderId
                      ].depth +
                        1) *
                        40}px`
                    }}
                  >
                    <HierarchyItemRow
                      id={i}
                      name={data.itemsById[i].name}
                      status={statusColor}
                    />
                  </Windowing.Item>
                )
              )
            }
          </Windowing.List>
        </Windowing.Scroller>
      </Windowing>
    </SelectionProvider>
  );
});
