import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  WindowingWrapper,
  InViewList,
  InViewListItem,
  ItemRow
} from '../../index';

storiesOf('Components', module).add('Windowing', () => {
  const items = [...new Array(1000)].map((i, index) => ({
    id: index + 1
  }));

  return (
    <WindowingWrapper
      style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
    >
      {(height, scrollTop) => (
        <InViewList
          height={height}
          scrollTop={scrollTop}
          items={items}
          defaultItemHeight={50}
          offset={30}
        >
          {({ renderIndexes, style, itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem
                key={i.id}
                index={index}
                baseStyle={style}
                renderIndexes={renderIndexes}
              >
                <ItemRow bordered>
                  <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                </ItemRow>
              </InViewListItem>
            ))
          }
        </InViewList>
      )}
    </WindowingWrapper>
  );
});
