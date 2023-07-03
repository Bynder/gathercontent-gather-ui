import React from "react";
import { Windowing, ItemRow, FolderRow } from "../../index";
import { createData } from "./windowingData";
import { WindowingIdsMock } from "./WindowingIdsMock";

export default {
  title: "Legacy/Windowing/Nested",
  args: {
    parents: 20,
    children: 20,
  },
};

export function Nested({ parents, children }: any) {
  const { allIds, parentIds, byId } = createData(parents, children);

  return (
    <WindowingIdsMock allWindowingIds={allIds}>
      {({ allWindowingIds, addIds, removeIds }: any) => (
        <Windowing
          itemHeight={50}
          buffer={20}
          allIds={allWindowingIds}
          containerHeight="500px"
        >
          {/* @ts-expect-error TS(2339): Property 'Scroller' does not exist on type '{ ({ c... Remove this comment to see the full error message */}
          <Windowing.Scroller style={{}}>
            {/* @ts-expect-error TS(2339): Property 'List' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
            <Windowing.List>
              {({ inViewWindowingIds }: any) =>
                inViewWindowingIds.map((i: any) => (
                  // @ts-expect-error TS(2339): Property 'Item' does not exist on type '{ ({ child... Remove this comment to see the full error message
                  <Windowing.Item
                    key={i}
                    index={allIds.indexOf(i)}
                    style={{
                      paddingLeft: `${byId[i].depth * 40}px`,
                    }}
                  >
                    {parentIds.indexOf(i) === -1 ? (
                      <ItemRow bordered>
                        <ItemRow.Name>{byId[i].name}</ItemRow.Name>
                      </ItemRow>
                    ) : (
                      <FolderRow open>
                        {(show, setShow) => (
                          // @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message
                          <FolderRow.Inner style={{ minWidth: "320px" }}>
                            {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
                            <FolderRow.Name
                              show={show}
                              setShow={setShow}
                              handleOnClick={
                                show
                                  ? () =>
                                      removeIds(
                                        allWindowingIds.indexOf(i) + 1,
                                        allWindowingIds.length -
                                          (allWindowingIds.indexOf(i) + 1)
                                      )
                                  : () =>
                                      addIds(
                                        allIds.slice(
                                          allIds.indexOf(i) + 1,
                                          allIds.length
                                        ),
                                        allWindowingIds.indexOf(i) + 1
                                      )
                              }
                            >
                              {byId[i].name}
                              {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
                            </FolderRow.Name>
                            {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
                          </FolderRow.Inner>
                        )}
                      </FolderRow>
                    )}
                    {/* @ts-expect-error TS(2339): Property 'Item' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
                  </Windowing.Item>
                ))
              }
              {/* @ts-expect-error TS(2339): Property 'List' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
            </Windowing.List>
            {/* @ts-expect-error TS(2339): Property 'Scroller' does not exist on type '{ ({ c... Remove this comment to see the full error message */}
          </Windowing.Scroller>
        </Windowing>
      )}
    </WindowingIdsMock>
  );
}
