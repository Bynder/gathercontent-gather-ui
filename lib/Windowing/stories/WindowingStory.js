import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow,
  FolderRow
} from '../../index';
import { WindowingNestedContainer } from './WindowingNestedContainer';
import { createData } from './windowingData';

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
    const parents = number('Number of parents', 5);
    const children = number('Number of children each parent has ', 5);

    const { allIds, parentIds, byId } = createData(parents, children);

    return (
      <WindowingNestedContainer allIds={allIds}>
        {({ windowingIds, addIds, removeIds }) => (
          <WindowingProvider
            style={{
              overflow: 'scroll',
              position: 'relative',
              height: '800px'
            }}
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
                            <FolderRow.Name
                              show={show}
                              setShow={setShow}
                              handleOnClick={
                                show
                                  ? () =>
                                      removeIds(
                                        windowingIds.indexOf(i) + 1,
                                        windowingIds.length -
                                          (windowingIds.indexOf(i) + 1)
                                      )
                                  : () =>
                                      addIds(
                                        allIds.slice(
                                          allIds.indexOf(i) + 1,
                                          allIds.length
                                        ),
                                        windowingIds.indexOf(i) + 1
                                      )
                              }
                            >
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
  });
