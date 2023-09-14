import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";

export interface ResizeableProps {
  defaultWidth?: string;
  gutterSize?: string;
  minWidth?: string;
  maxWidth?: string;
}

export function Resizeable({
  children,
  defaultWidth,
  gutterSize = "16px",
  maxWidth,
  minWidth,
}: PropsWithChildren<ResizeableProps>) {
  const resizableRef = useRef<HTMLDivElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
  });
  const [width, setWidth] = useState(defaultWidth);

  const doDrag = (evt: MouseEvent) => {
    if (resizableRef.current === null || gutterRef.current === null) return;

    // Using the computed style to get the px value
    // Just in case the gutterSize prop is in anything other than px
    const gutterOffset = parseInt(
      window.getComputedStyle(gutterRef.current).width,
      10
    );

    const newWidth =
      state.startWidth + evt.clientX - state.startX - gutterOffset;

    console.log({ newWidth, maxWidth, minWidth });

    setWidth(`${newWidth}px`);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener("mouseup", stopDrag, false);
  };

  const initDrag = useCallback(
    (evt: React.DragEvent<HTMLDivElement>) => {
      if (resizableRef.current === null) return;

      const startWidth = parseInt(
        window.getComputedStyle(resizableRef.current).width,
        10
      );
      const startX = evt.clientX;

      setState({ startX, startWidth });

      document.addEventListener("mousemove", doDrag, false);
      document.addEventListener("mouseup", stopDrag, false);
    },
    [setState]
  );

  // remember to remove global listeners on dismount
  useEffect(() => () => stopDrag(), []);

  return (
    <div
      className="resizeable"
      style={{
        width,
        // maxWidth,
        // minWidth,
      }}
      ref={resizableRef}
    >
      <div
        className="resizeable__wrapper"
        style={{
          width,
        }}
      >
        {children}
        <span
          ref={gutterRef}
          className="resizable__gutter"
          style={{
            width: gutterSize,
            right: `calc(-${gutterSize} / 2)`,
          }}
          onMouseDown={initDrag}
        />
      </div>
    </div>
  );
}
