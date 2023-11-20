import React, { useContext } from "react";
import { WindowingContext } from "./Windowing";

function WindowingItem({ children, index, style }: any) {
  const { itemHeight, baseItemStyle }: any = useContext(WindowingContext);

  return (
    <div
      key={`${index}-id`}
      style={{
        ...style,
        ...baseItemStyle,
        top: `${index * itemHeight}px`,
      }}
      className="gui-windowing-item"
    >
      {children}
    </div>
  );
}

WindowingItem.defaultProps = {
  style: {},
};

export { WindowingItem };
