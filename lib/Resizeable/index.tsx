import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef } from "react";

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

  const doDrag = (evt: MouseEvent) => {
    if (resizableRef.current === null || gutterRef.current === null) return;

    // Using the computed style to get the px value
    // Just in case the gutterSize prop is in anything other than px
    const gutterOffset = parseInt(
      window.getComputedStyle(gutterRef.current).width,
      10
    );

    resizableRef.current.style.width = `${
      state.startWidth + evt.clientX - state.startX - gutterOffset
    }px`;
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener("mouseup", stopDrag, false);
  };

  const initDrag = useCallback(
    (evt: React.DragEvent<HTMLDivElement>) => {
      if (resizableRef.current === null) return;

      const { width } = window.getComputedStyle(resizableRef.current);
      const startWidth = parseInt(width, 10);
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
      ref={resizableRef}
      className="resizable"
      style={{
        width: defaultWidth,
        maxWidth,
        minWidth,
      }}
    >
      {children}
      <span
        ref={gutterRef}
        className="resizable__gutter resizable__gutter--h"
        style={{
          width: gutterSize,
          right: `calc(-${gutterSize} / 2)`,
        }}
        onMouseDown={initDrag}
      />
    </div>
  );
}
