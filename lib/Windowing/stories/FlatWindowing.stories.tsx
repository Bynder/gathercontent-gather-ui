import React from 'react';
import { Windowing, ItemRow } from '../../index';

export default {
  title: 'Legacy/Windowing/Flat'
};

export const Flat = () => {
  const items = [...new Array(1000)].map((i, index) => ({
    id: index + 1
  }));

  return (
    <Windowing itemHeight={50} allIds={items} containerHeight="800px">
      <Windowing.Scroller>
        <Windowing.List>
          {({ inViewWindowingIds }) =>
            inViewWindowingIds.map((i, index) => (
              <Windowing.Item key={i.id} index={index}>
                <ItemRow bordered>
                  <ItemRow.Name>hello world {i.id}</ItemRow.Name>
                </ItemRow>
              </Windowing.Item>
            ))
          }
        </Windowing.List>
      </Windowing.Scroller>
    </Windowing>
  );
};

Flat.parameters = {
  controls: { hideNoControlsWarning: true }
};
