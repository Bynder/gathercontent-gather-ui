import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow,
  FolderRow
} from '../../index';

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
        <InViewList items={items} itemHeight={50}>
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
        <FolderRow open>
          {(show, setShow) => (
            <>
              <InViewListItem index={0} relativeToRenderIndexes={false}>
                <FolderRow.Inner>
                  <FolderRow.Name show={show} setShow={setShow}>
                    ...
                  </FolderRow.Name>
                </FolderRow.Inner>
              </InViewListItem>

              <InViewList
                items={items1}
                index={1}
                acceptedRange={{ start: 0, end: 49 }}
              >
                {sharedState => (
                  <FolderRow.Contents show={show} id="folder-1-contents">
                    {sharedState.itemsInView.map(i => (
                      <InViewListItem
                        key={i}
                        index={items1.indexOf(i)}
                        relativeToRenderIndexes={false}
                      >
                        <ItemRow bordered>
                          <ItemRow.Name>folder 1 {i}</ItemRow.Name>
                        </ItemRow>
                      </InViewListItem>
                    ))}

                    <FolderRow open>
                      {(s, ss) => (
                        <>
                          <InViewListItem
                            index={items1.length}
                            relativeToRenderIndexes={false}
                          >
                            <FolderRow.Inner>
                              <FolderRow.Name show={s} setShow={ss}>
                                ...
                              </FolderRow.Name>
                            </FolderRow.Inner>
                          </InViewListItem>

                          <InViewList
                            items={items2}
                            index={items1.length + 1}
                            acceptedRange={{ start: 50, end: 99 }}
                          >
                            {sharedState2 => (
                              <FolderRow.Contents
                                show={s}
                                id="folder-2-contents"
                              >
                                {sharedState2.itemsInView.map(o => (
                                  <InViewListItem
                                    key={o}
                                    index={items2.indexOf(o)}
                                    relativeToRenderIndexes={false}
                                  >
                                    <ItemRow bordered>
                                      <ItemRow.Name>folder 2 {o}</ItemRow.Name>
                                    </ItemRow>
                                  </InViewListItem>
                                ))}
                              </FolderRow.Contents>
                            )}
                          </InViewList>
                        </>
                      )}
                    </FolderRow>
                  </FolderRow.Contents>
                )}
              </InViewList>
            </>
          )}
        </FolderRow>
      </WindowingProvider>
    );
  });
