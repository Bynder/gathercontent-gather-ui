import React from "react";
import useResizeObserver from "@react-hook/resize-observer";

export function useSize(target: any) {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  // @ts-expect-error
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
