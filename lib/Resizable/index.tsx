import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useRef } from "react";
import { keepValueWithinRange, toPixels } from "../helpers";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface ResizableProps {
  containerWidth?: number | string;
  id?: string;
  initialWidth?: number | string;
  minResizableWidth?: number | string;
  maxResizableWidth?: number | string;
  onResizeComplete?: (resizedTo: number) => void;
  rememberPosition?: boolean;
  useGutterOffset?: boolean;
}

export function Resizable(props: PropsWithChildren<ResizableProps>) {
  const {
    children,
    id,
    onResizeComplete,
    rememberPosition = false,
    useGutterOffset = false,
  } = props;
  const initialWidth = toPixels(props.initialWidth ?? "50%");
  const gutterSize = useGutterOffset ? 16 : 0;
  const doDragRef = useRef<(evt: MouseEvent) => void>(() => {});
  const stopDragRef = useRef<(evt: MouseEvent) => void>(() => {});
  const resizeRef = useRef<HTMLDivElement>(null);
  const resizeWrapperRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLSpanElement>(null);

  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
  });

  const [lastPosition, setLastPosition] = useLocalStorage(
    `RESIZE_POSITION_${id ?? ""}`,
    initialWidth
  );

  const containerWidth = () =>
    toPixels(props.containerWidth ?? document.body.offsetWidth);

  const minWidth = () =>
    toPixels(props.minResizableWidth ?? 0, containerWidth());

  const maxWidth = () =>
    toPixels(props.maxResizableWidth ?? "100%", containerWidth());

  const getWrapperWidth = () =>
    toPixels(resizeWrapperRef.current?.style.width ?? 0);

  const doResize = (value: number) => {
    if (resizeWrapperRef.current === null) return;

    const newWidth =
      keepValueWithinRange(value, minWidth(), maxWidth()) - gutterSize;

    resizeWrapperRef.current.style.width = `${newWidth}px`;
    setLastPosition(newWidth);
  };

  const doDrag = (evt: MouseEvent) => {
    const newWidth = state.startWidth + evt.clientX - state.startX;
    doResize(newWidth);
  };

  const stopDrag = () => {
    if (onResizeComplete) {
      onResizeComplete(getWrapperWidth() + gutterSize);
    }
    document.removeEventListener("mousemove", doDragRef.current, false);
    document.removeEventListener("mouseup", stopDragRef.current, false);
  };

  const initDrag = useCallback(
    (evt: React.DragEvent<HTMLDivElement>) => {
      const { clientX } = evt;

      setState({
        startX: clientX,
        startWidth: getWrapperWidth(),
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
    doResize(rememberPosition ? lastPosition : initialWidth);
    // remember to remove global listeners on unmounting
    return () => stopDrag();
  }, []);

  useEffect(() => {
    const handeWindowResize = () => doResize(getWrapperWidth() + gutterSize);
    window.addEventListener("resize", handeWindowResize);
    return () => {
      window.removeEventListener("resize", handeWindowResize);
    };
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
