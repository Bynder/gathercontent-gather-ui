import React, { Fragment } from 'react';
import { number, string } from 'prop-types';
import pluralize from 'pluralize';

const SelectionBarCounter = ({ count, type }) => (
  <Fragment>
    <span className="selection-bar__count">{count}</span>
    <span className="selection-bar__type">
      {pluralize(type, count)} selected
    </span>
  </Fragment>
);

SelectionBarCounter.propTypes = {
  count: number.isRequired,
  type: string.isRequired
};

export default SelectionBarCounter;
