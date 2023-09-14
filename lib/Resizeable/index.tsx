import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef } from "react";
import { keepValueWithinRange, normaliseUnitsToPixelValue } from "../helpers";

export interface ResizeableProps {
  defaultWidth?: string;
  minWidth?: string;
  maxWidth?: string;
}

export function Resizeable({
  children,
  defaultWidth = "50%",
  maxWidth,
  minWidth,
}: PropsWithChildren<ResizeableProps>) {
  const handleRef = useRef<HTMLSpanElement>(null);
  const min = normaliseUnitsToPixelValue(minWidth ?? 0);
  const max = normaliseUnitsToPixelValue(maxWidth ?? "100%");
  const gutterSize = 16;

  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
    width: keepValueWithinRange(
      normaliseUnitsToPixelValue(defaultWidth),
      min,
      max
    ),
  });

  const doDrag = (evt: MouseEvent) => {
    const newWidth = state.startWidth + evt.clientX - state.startX;

    setState((prev) => ({
      ...prev,
      width: keepValueWithinRange(newWidth, min, max),
    }));
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag, false);
    document.removeEventListener("mouseup", stopDrag, false);
  };

  const initDrag = useCallback(
    (evt: React.DragEvent<HTMLDivElement>) => {
      const { clientX } = evt;

      const newState = {
        ...state,
        startX: clientX,
        startWidth: state.width,
      };

      setState(newState);

      document.addEventListener("mousemove", doDrag, false);
      document.addEventListener("mouseup", stopDrag, false);
    },
    [setState]
  );

  const setGutterHandlePosition = (evt: React.MouseEvent<HTMLSpanElement>) => {
    const handle = handleRef.current;
    if (handle === null) return;

    const rect = evt.currentTarget.getBoundingClientRect();
    const y = evt.clientY - rect.top;

    handle.style.top = `${y - handle.offsetHeight / 2}px`;
  };

  // remember to remove global listeners on dismount
  useEffect(() => () => stopDrag(), []);

  return (
    <div className="resizeable">
      <div
        className="resizeable__wrapper"
        style={{
          width: state.width - gutterSize,
        }}
      >
        {children}
        <span
          role="none"
          className="resizable__gutter"
          onMouseDown={initDrag}
          onMouseMove={setGutterHandlePosition}
        >
          <span ref={handleRef} className="resizable__gutter-handle" />
        </span>
      </div>
    </div>
  );
}
