import React, { useContext } from "react";
import { WindowingContext } from "./Windowing";

function WindowingList({ children, ...rest }: any) {
  const { itemHeight, allWindowingIds, inViewWindowingIds }: any =
    useContext(WindowingContext);

  return (
    <div
      className="gui-windowing-list"
      style={{
        height: `${allWindowingIds.length * itemHeight}px`,
      }}
      {...rest}
    >
      {children({ inViewWindowingIds })}
    </div>
  );
}

export { WindowingList };
