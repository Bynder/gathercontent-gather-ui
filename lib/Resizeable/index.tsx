import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect } from "react";

/**
 * Try to normalise all units to a standard pixel value to keep maths simple elsewhere
 */
function normaliseUnitsToPixelValue(
  value: string | number,
  container?: HTMLElement
) {
  if (typeof value === "number") {
    return value;
  }

  if (value.endsWith("px")) {
    return parseInt(value, 10);
  }

  if (value.endsWith("%")) {
    const containerWidthAsPercent =
      (container || document.body).offsetWidth / 100;
    return containerWidthAsPercent * parseInt(value, 10);
  }

  console.warn(
    `Could not interpret a normalised value for "${value}. Parsing directly to integer.`
  );
  return parseInt(value, 10);
}

/**
 * Ensure the default width is between the specified max and min widths
 */
const calculateStartingWidth = (
  defaultWidth: number,
  min: number,
  max: number
) => {
  let value = normaliseUnitsToPixelValue(defaultWidth);
  value = Math.min(value, max);
  value = Math.max(value, min);
  return value;
};

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
  const min = normaliseUnitsToPixelValue(minWidth ?? 0);
  const max = normaliseUnitsToPixelValue(maxWidth ?? "100%");
  const gutterSize = 16;

  const [state, setState] = React.useState({
    startX: 0,
    startWidth: 0,
    width: calculateStartingWidth(
      normaliseUnitsToPixelValue(defaultWidth),
      min,
      max
    ),
  });

  const doDrag = (evt: MouseEvent) => {
    const newWidth = state.startWidth + evt.clientX - state.startX;
    const hasExceededMaxWidth = newWidth > max;
    const hasExceededMinWidth = newWidth < min;

    if (hasExceededMaxWidth || hasExceededMinWidth) {
      return;
    }

    setState((prev) => ({ ...prev, width: newWidth }));
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
    [state, setState]
  );

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
          style={{
            width: gutterSize,
            right: -(gutterSize / 2),
          }}
          onMouseDown={initDrag}
        />
      </div>
    </div>
  );
}
