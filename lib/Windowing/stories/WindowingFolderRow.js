import React from 'react';
import { FolderRow, InViewList, InViewListItem, ItemRow } from 'lib';
import { number } from 'prop-types';

function WindowingFolderRow({
  index,
  offset,
  childrenDepth,
  itemCount,
  currentDepth
}) {
  const items = [...new Array(itemCount)].map(
    (i, childIndex) => `folder-${currentDepth}-${childIndex}`
  );

  return (
    currentDepth <= childrenDepth && (
      <FolderRow open>
        {(show, setShow) => (
          <>
            <InViewListItem index={index} relativeToRenderIndexes={false}>
              <FolderRow.Inner>
                <FolderRow.Name show={show} setShow={setShow}>
                  {`folder ${currentDepth}`}
                </FolderRow.Name>
              </FolderRow.Inner>
            </InViewListItem>

            <InViewList
              items={items}
              index={index + 1}
              acceptedRange={{ offset, length: itemCount }}
            >
              {sharedState => (
                <FolderRow.Contents show={show}>
                  {sharedState.itemsInView.map(i => (
                    <InViewListItem
                      key={i}
                      index={items.indexOf(i)}
                      relativeToRenderIndexes={false}
                    >
                      <ItemRow bordered data-testid={i}>
                        <ItemRow.Name>{i}</ItemRow.Name>
                      </ItemRow>
                    </InViewListItem>
                  ))}
                  <WindowingFolderRow
                    index={itemCount}
                    offset={currentDepth * (itemCount + 1)}
                    itemCount={itemCount}
                    childrenDepth={childrenDepth}
                    currentDepth={currentDepth + 1}
                  />
                </FolderRow.Contents>
              )}
            </InViewList>
          </>
        )}
      </FolderRow>
    )
  );
}

WindowingFolderRow.propTypes = {
  index: number.isRequired,
  offset: number.isRequired,
  childrenDepth: number.isRequired,
  itemCount: number.isRequired,
  currentDepth: number
};

WindowingFolderRow.defaultProps = {
  currentDepth: 1
};

export { WindowingFolderRow };
