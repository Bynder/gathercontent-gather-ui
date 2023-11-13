import React, { Fragment } from "react";

export function DragLine({ alignment, offsetPx }: any) {
  return (
    <>
      <span
        className="gui-drag-line__ball gui-drag-line__ball-left"
        style={{
          [alignment]: `${-5 - offsetPx}px`,
        }}
      />
      <span
        className="gui-drag-line"
        style={{
          [alignment]: `${-3 - offsetPx}px`,
        }}
      />
      <span
        className="gui-drag-line__ball gui-drag-line__ball-right"
        style={{
          [alignment]: `${-5 - offsetPx}px`,
        }}
      />
    </>
  );
}

DragLine.defaultProps = {
  offsetPx: 0,
};
