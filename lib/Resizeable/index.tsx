import type { PropsWithChildren } from "react";
import React from "react";

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
  return (
    <div
      className="resizable"
      style={{
        width: defaultWidth,
        maxWidth,
        minWidth,
      }}
    >
      {children}
      <span
        className="resizable__gutter"
        style={{
          width: gutterSize,
          right: `calc(-${gutterSize} / 2)`,
        }}
      />
    </div>
  );
}
