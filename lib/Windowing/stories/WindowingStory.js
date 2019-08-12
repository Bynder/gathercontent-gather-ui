import React from 'react';
import { storiesOf } from '@storybook/react';
import { InViewListRenderer, InViewListItem } from '../../index';

storiesOf('Components', module).add(
  'Windowing',
  () => {
    const items = [...new Array(500)];
    const props = {};

    return (
      <div style={{ overflow: "hidden" }}>
        <InViewListRenderer itemCount={items.length} defaultItemHeight={50}>
          {({ renderIndexes, style }) =>
            items.map((i, index) => (
              <InViewListItem renderIndexes={renderIndexes} index={index} baseStyle={style}>
                hello world {index}
              </InViewListItem>
            ))
          }
        </InViewListRenderer>
      </div>
    );
  }
);
