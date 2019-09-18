import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow
} from '../../index';
import { WindowingFolderRow } from './WindowingFolderRow';

const stories = storiesOf('Components/Windowing', module);
stories.addDecorator(withKnobs);

stories
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
    const childrenDepth = number('Depth of children', 20);
    const itemCount = number('Number of items in each layer', 5);
    const buffer = number('Buffer', 20);

    const allIdslength = childrenDepth * itemCount + childrenDepth;

    return (
      <WindowingProvider
        style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
        itemsLength={allIdslength}
        itemHeight={50}
        buffer={buffer}
      >
        <WindowingFolderRow
          name="folder 1"
          index={0}
          depth={1}
          offset={0}
          itemCount={itemCount}
          childrenDepth={childrenDepth}
        />
      </WindowingProvider>
    );
  });
