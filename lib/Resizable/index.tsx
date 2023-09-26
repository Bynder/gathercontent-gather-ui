import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef } from "react";
import { keepValueWithinRange, toPixels } from "../helpers";

export interface ResizableProps {
  defaultWidth?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  useGutterOffset?: boolean;
  containerWidth?: number | string;
}

/**
 * A wrapper for making a given child element resizable
 * @param children The element to be resized
 * @param defaultWidth The width the child should initially render to. If min and max widths are provided, then the provided width will be massaged to meet those constraints
 * @param maxWidth The maximum width the element can be resized to
 * @param minWidth The minimum width the element can be resized to
 * @param useGutterOffset Toggle whether we should take the width of the gutter into account for calculating the width of the resized item. This can be handy depending on the CSS being applied to or around the child element
 * @param rest Contains params that need converting such as the containerWidth
 */
export function Resizable({
  children,
  defaultWidth = "50%",
  maxWidth,
  minWidth,
  useGutterOffset = false,
  ...rest
}: PropsWithChildren<ResizableProps>) {
  const containerWidth = toPixels(
    rest.containerWidth ?? document.body.offsetWidth
  );
  const doDragRef = useRef<(evt: MouseEvent) => void>(() => {});
  const stopDragRef = useRef<(evt: MouseEvent) => void>(() => {});
  const resizeRef = useRef<HTMLDivElement>(null);
  const resizeWrapperRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLSpanElement>(null);
  const gutterSize = useGutterOffset ? 16 : 0;
  const min = toPixels(minWidth ?? 0, containerWidth);
  const max = toPixels(maxWidth ?? "100%", containerWidth);

  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
  });

  const getWidth = () => toPixels(resizeWrapperRef.current?.style.width || 0);

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
    document.removeEventListener("mousemove", doDragRef.current, false);
    document.removeEventListener("mouseup", stopDragRef.current, false);
  };

  const initDrag = useCallback(
    (evt: React.DragEvent<HTMLDivElement>) => {
      const { clientX } = evt;

      setState({
        startX: clientX,
        startWidth: getWidth(),
      });

      doDragRef.current = doDrag;
      stopDragRef.current = stopDrag;
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

    const yPosition = keepValueWithinRange(
      evt.clientY - rect.top,
      handleOffset,
      gutter.offsetHeight - handleOffset
    );

    handle.style.top = `${yPosition - handleOffset}px`;
  };

  useEffect(() => {
    const newWidth = keepValueWithinRange(toPixels(defaultWidth), min, max);
    setWidth(newWidth);

    // remember to remove global listeners on dismount
    return () => stopDrag();
  }, []);

  return (
    <div ref={resizeRef} className="resizable">
      <div ref={resizeWrapperRef} className="resizable__wrapper">
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
