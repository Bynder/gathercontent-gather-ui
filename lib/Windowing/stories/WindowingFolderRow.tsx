import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { FolderRow, InViewList, InViewListItem, ItemRow } from 'lib';
import { number } from 'prop-types';

function WindowingFolderRow({
  index,
  offset,
  childrenDepth,
  itemCount,
  depth
}: any) {
  const items = [...new Array(itemCount)].map(
    (i, childIndex) => `folder-${depth}-${childIndex}`
  );

  return depth <= childrenDepth && (
    <FolderRow open>
      {(show: any, setShow: any) => (
        <>
          <InViewListItem index={index} relativeToRenderIndexes={false}>
            <FolderRow.Inner style={{ minWidth: '320px' }}>
              <FolderRow.Name show={show} setShow={setShow}>
                {`folder ${depth}`}
              </FolderRow.Name>
            </FolderRow.Inner>
          </InViewListItem>

          <FolderRow.Contents show={show}>
            <InViewList
              items={items}
              index={index + 1}
              depth={depth}
              acceptedRange={{ offset, length: itemCount }}
            >
              {(sharedState: any) => <>
                {sharedState.itemsInView.map((i: any) => <InViewListItem
                  key={i}
                  index={items.indexOf(i)}
                  relativeToRenderIndexes={false}
                >
                  <ItemRow
                    bordered
                    data-testid={i}
                    style={{ minWidth: '320px' }}
                  >
                    <ItemRow.Name>{i}</ItemRow.Name>
                  </ItemRow>
                </InViewListItem>)}
                // @ts-expect-error TS(2786): 'WindowingFolderRow' cannot be used as a JSX compo... Remove this comment to see the full error message
                <WindowingFolderRow
                  index={itemCount}
                  depth={depth + 1}
                  offset={depth * (itemCount + 1)}
                  itemCount={itemCount}
                  childrenDepth={childrenDepth}
                />
              </>}
            </InViewList>
          </FolderRow.Contents>
        </>
      )}
    </FolderRow>
  );
}

WindowingFolderRow.propTypes = {
  index: number.isRequired,
  offset: number.isRequired,
  childrenDepth: number.isRequired,
  itemCount: number.isRequired,
  depth: number
};

WindowingFolderRow.defaultProps = {
  depth: 1
};

export { WindowingFolderRow };
