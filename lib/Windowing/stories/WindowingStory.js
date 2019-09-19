import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import uuid from 'uuid/v4';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow,
  FolderRow
} from '../../index';
import { WindowingFolderRow } from './WindowingFolderRow';
import { WindowingNestedContainer } from './WindowingNestedContainer';

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
  .add('Nested V2', () => {
    const parentIds = [...new Array(20)].map(() => uuid());
    const byParentIds = parentIds.reduce((acc, value) => ({
      ...acc,
      [value]: [...new Array(20)].map(() => uuid()),
    }), {});

    const allIds = parentIds.reduce((acc, value) => [...acc, value, ...byParentIds[value]], []);

    let depth = 0;
    const byId = allIds.reduce((acc, value, index) => {
      const lastId = allIds[index - 1];
      if (parentIds.indexOf(lastId) > -1) {
        depth += 1;
      }

      return {
        ...acc,
        [value]: {
          id: value,
          name: (parentIds.indexOf(value) > -1) ? 'Folder' : 'Item',
          depth,
        }
      }
    }, {});

    return (
      <WindowingNestedContainer allIds={allIds}>
        {({ windowingIds, addIds, removeIds }) => (
          <WindowingProvider
            style={{ overflow: 'scroll', position: 'relative', height: '800px' }}
            itemsLength={windowingIds.length}
            itemHeight={50}
            buffer={20}
          >
            <InViewList items={windowingIds} itemHeight={50} index={0}>
              {({ itemsInView }) =>
                itemsInView.map((i, index) => (
                  <InViewListItem
                    key={i}
                    index={index}
                    style={{
                      paddingLeft: `${byId[i].depth * 40}px`
                    }}
                  >
                    {parentIds.indexOf(i) === -1 ? (
                      <ItemRow bordered>
                        <ItemRow.Name>{byId[i].name} </ItemRow.Name>
                      </ItemRow>
                    ) : (
                      <FolderRow open>
                        {(show, setShow) => (
                          <FolderRow.Inner style={{ minWidth: '320px' }}>
                            <FolderRow.Name show={show} setShow={setShow} handleOnClick={show ? () => removeIds((windowingIds.indexOf(i) + 1), 5) : () => addIds(byParentIds[i])}>
                              {byId[i].name}
                            </FolderRow.Name>
                          </FolderRow.Inner>
                        )}
                      </FolderRow>
                    )}
                  </InViewListItem>
                ))
              }
            </InViewList>
          </WindowingProvider>
        )}
      </WindowingNestedContainer>
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
