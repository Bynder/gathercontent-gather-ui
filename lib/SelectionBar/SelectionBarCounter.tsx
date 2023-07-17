import React, { Fragment } from 'react';
import { number, string } from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'plur... Remove this comment to see the full error message
import pluralize from 'pluralize';

function SelectionBarCounter({
  count,
  type
}: any) {
  return <>
    <span className="selection-bar__count">{count}</span>
    <span className="selection-bar__type">
      {pluralize(type, count)} selected
    </span>
  </>
}

SelectionBarCounter.propTypes = {
  count: number.isRequired,
  type: string.isRequired
};

export default SelectionBarCounter;