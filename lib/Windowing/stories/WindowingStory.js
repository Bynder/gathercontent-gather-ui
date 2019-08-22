import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow
} from '../../index';

const items = [...new Array(1000)].map((i, index) => ({
  id: index + 1
}));

storiesOf('Components/Windowing', module)
  .add('Flat', () => {
    return (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
      >
        <InViewList items={items} itemHeight={50} offset={20}>
          {({ renderIndexes, baseStyle, itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem
                key={i.id}
                index={index}
                baseStyle={baseStyle}
                renderIndexes={renderIndexes}
                itemHeight={50}
              >
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
    return (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
      >
        <InViewList items={items} itemHeight={50} offset={20}>
          {({ renderIndexes, baseStyle, itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem
                key={i.id}
                index={index}
                baseStyle={baseStyle}
                renderIndexes={renderIndexes}
                itemHeight={50}
              >
                <ItemRow bordered>
                  <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                </ItemRow>
              </InViewListItem>
            ))
          }
        </InViewList>
      </WindowingProvider>
    );
  });
