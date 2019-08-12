import React from 'react';
import { storiesOf } from '@storybook/react';
import { InViewListRenderer, InViewListItem } from '../../index';
import { WindowingDOMWrapper } from '../WindowingDOMWrapper';

storiesOf('Components', module).add('Windowing', () => {
  const items = [...new Array(500)];
  const props = {};

  return (
    <WindowingDOMWrapper
      style={{ overflow: 'scroll', position: 'relative', height: '300px' }}
    >
      {(height, scrollTop) => (
        <InViewListRenderer height={height} scrollTop={scrollTop} items={items} defaultItemHeight={50}>
          {({ renderIndexes, style, itemsInView }) =>
            itemsInView.map((i, index) => (
              <InViewListItem
                renderIndexes={renderIndexes}
                index={index}
                baseStyle={style}
                key={index}
              >
                hello world {index}
              </InViewListItem>
            ))
          }
        </InViewListRenderer>
      )}
    </WindowingDOMWrapper>
  );
});
