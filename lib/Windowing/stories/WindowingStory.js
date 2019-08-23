import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow
} from '../../index';
import { WindowingFolderRow } from './WindowingFolderRow';

storiesOf('Components/Windowing', module)
  .add('Flat', () => {
    const items = [...new Array(1000)].map((i, index) => ({
      id: index + 1
    }));

    return (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
        itemsLength={items.length}
        itemHeight={50}
      >
        <InViewList items={items} itemHeight={50} index={0}>
          {({ itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem key={i.id} index={index}>
                <ItemRow bordered>
                  <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                </ItemRow>
              </InViewListItem>
            ))
          }
        </InViewList>
      </WindowingProvider>
    );
  })
  .add('Nested', () => {
    const items1 = [...new Array(50)].map((i, index) => `folder-1-${index}`);
    const items2 = [...new Array(50)].map((i, index) => `folder-2-${index}`);
    const allIds = ['folder-1', ...items1, 'folder-2', ...items2];

    return (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
        itemsLength={allIds.length}
        itemHeight={50}
        offset={5}
      >
        <WindowingFolderRow
          items={items1}
          index={0}
          name="folder 1"
          offset={0}
          length={items1.length - 1}
        >
          <WindowingFolderRow
            items={items2}
            index={items1.length}
            name="folder 2"
            offset={items1.length}
            length={items1.length + items2.length - 1}
          />
        </WindowingFolderRow>
      </WindowingProvider>
    );
  });
