import React from "react";
import { uniqueId } from "lodash";

export function TreeLine() {
  return <span className="treelines__line" />;
}

export function TreeLines({ quantity = 0 }) {
  const lines = [];
  while (lines.length < quantity) {
    lines.push(<TreeLine key={uniqueId()} />);
  }
  return <div className="treelines">{lines}</div>;
}

TreeLines.defaultProps = {
  quantity: 0,
};

export default TreeLines;
