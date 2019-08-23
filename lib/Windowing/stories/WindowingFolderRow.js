import React from 'react';
import { FolderRow, InViewList, InViewListItem, ItemRow } from 'lib';
import { arrayOf, node, string, number } from 'prop-types';

function WindowingFolderRow({ items, index, name, offset, length, children }) {
  return (
    <FolderRow open>
      {(show, setShow) => (
        <>
          <InViewListItem index={index} relativeToRenderIndexes={false}>
            <FolderRow.Inner>
              <FolderRow.Name show={show} setShow={setShow}>
                {name}
              </FolderRow.Name>
            </FolderRow.Inner>
          </InViewListItem>

          <InViewList
            items={items}
            index={index + 1}
            acceptedRange={{ offset, length }}
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
                      <ItemRow.Name>
                        {name} {i}
                      </ItemRow.Name>
                    </ItemRow>
                  </InViewListItem>
                ))}
                {children}
              </FolderRow.Contents>
            )}
          </InViewList>
        </>
      )}
    </FolderRow>
  );
}

WindowingFolderRow.propTypes = {
  items: arrayOf(number).isRequired,
  index: number.isRequired,
  name: string.isRequired,
  offset: number.isRequired,
  length: number.isRequired,
  children: node.isRequired
};

export { WindowingFolderRow };
