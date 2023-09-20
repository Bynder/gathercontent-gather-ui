import React from "react";
import { Windowing, ItemRow } from "../../index";

export default {
  title: "Legacy/Windowing/Flat",
};

export function Flat() {
  const items = [...new Array(1000)].map((i, index) => ({
    id: index + 1,
  }));

  return (
    <Windowing itemHeight={50} allIds={items} containerHeight="800px">
      {/* @ts-expect-error TS(2339): Property 'Scroller' does not exist on type '{ ({ c... Remove this comment to see the full error message */}
      <Windowing.Scroller>
        {/* @ts-expect-error TS(2339): Property 'List' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
        <Windowing.List>
          {({ inViewWindowingIds }: any) =>
            inViewWindowingIds.map((i: any, index: any) => (
              // @ts-expect-error TS(2339): Property 'Item' does not exist on type '{ ({ child... Remove this comment to see the full error message
              <Windowing.Item key={i.id} index={index}>
                <ItemRow bordered>
                  <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                </ItemRow>
                {/* @ts-expect-error TS(2339): Property 'Item' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
              </Windowing.Item>
            ))
          }
          {/* @ts-expect-error TS(2339): Property 'List' does not exist on type '{ ({ child... Remove this comment to see the full error message */}
        </Windowing.List>
        {/* @ts-expect-error TS(2339): Property 'Scroller' does not exist on type '{ ({ c... Remove this comment to see the full error message  */}
      </Windowing.Scroller>
    </Windowing>
  );
}

Flat.parameters = {
  controls: { hideNoControlsWarning: true },
};
