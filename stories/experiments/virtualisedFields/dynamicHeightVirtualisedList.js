import React, { useRef } from 'react';
import {
  AutoSizer,
  List,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import TextareaAutosize from 'react-textarea-autosize';
import ReactResizeDetector from 'react-resize-detector';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50,
});

const rowCount = 100;

const DynamicHeightVirtualisedList = () => {
  const listRef = useRef(null);

  const RenderRow = ({ index, parent, key, style }) => {
    return (
      <CellMeasurer
        key={key}
        style={style}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <ReactResizeDetector
            onResize={() => {
              cache.clear(index);
              listRef.current.recomputeRowHeights();
            }}
          >
            <TextareaAutosize />
          </ReactResizeDetector>
        </div>
      </CellMeasurer>
    );
  };

  return (
    <div style={{ width: 500, height: 500, border: '1px solid red' }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={listRef}
            rowCount={rowCount}
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowRenderer={RenderRow}
            overScanRowCount={50}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default {
  title: 'Experiments/VirtualisedFields',
};

export const _DynamicHeightVirtualisedList = () => (
  <DynamicHeightVirtualisedList />
);

_DynamicHeightVirtualisedList.story = {
  name: 'DynamicHeightVirtualisedList',
};
