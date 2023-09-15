import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef } from "react";
import { keepValueWithinRange, normaliseUnitsToPixelValue } from "../helpers";

export interface ResizeableProps {
  defaultWidth?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

export function Resizeable({
  children,
  defaultWidth = "50%",
  maxWidth,
  minWidth,
}: PropsWithChildren<ResizeableProps>) {
  const resizeWrapperRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLSpanElement>(null);
  const min = normaliseUnitsToPixelValue(minWidth ?? 0);
  const max = normaliseUnitsToPixelValue(maxWidth ?? "100%");
  const gutterSize = 16;

  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
  });

  const getWidth = () =>
    normaliseUnitsToPixelValue(resizeWrapperRef.current?.style.width || 0);

  const setWidth = (value: number) => {
    if (resizeWrapperRef.current === null) return;

    resizeWrapperRef.current.style.width = `${
      keepValueWithinRange(value, min, max) - gutterSize
    }px`;
  };

  const doDrag = (evt: MouseEvent) => {
    const newWidth = state.startWidth + evt.clientX - state.startX;
    setWidth(newWidth);
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
        startWidth: getWidth(),
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
    const gutter = handle.parentElement as HTMLSpanElement;
    const handleOffset = handle.offsetHeight / 2;

    const y = keepValueWithinRange(
      evt.clientY - rect.top,
      handleOffset,
      gutter.offsetHeight - handleOffset
    );

    handle.style.top = `${y - handleOffset}px`;
  };

  useEffect(() => {
    setWidth(
      keepValueWithinRange(normaliseUnitsToPixelValue(defaultWidth), min, max)
    );

    // remember to remove global listeners on dismount
    return () => stopDrag();
  }, []);

  return (
    <div className="resizeable">
      <div ref={resizeWrapperRef} className="resizeable__wrapper">
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
