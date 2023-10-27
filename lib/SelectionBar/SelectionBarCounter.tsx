import React, { Fragment } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'plur... Remove this comment to see the full error message
import pluralize from "pluralize";

function SelectionBarCounter({ count, type }: any) {
  return (
    <>
      <span className="gui-selection-bar__count">{count}</span>
      <span className="gui-selection-bar__type">
        {pluralize(type, count)} selected
      </span>
    </>
  );
}

export default SelectionBarCounter;
