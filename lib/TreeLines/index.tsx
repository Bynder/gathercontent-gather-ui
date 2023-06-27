import React from 'react';
// @ts-expect-error TS(2305): Module '"prop-types"' has no exported member 'Prop... Remove this comment to see the full error message
import { PropTypes } from 'prop-types';
import { uniqueId } from 'lodash';

export const TreeLine = () => <span className="treelines__line" />;

const TreeLines = ({ quantity = 0 }) => {
  const lines = [];
  while (lines.length < quantity) {
    lines.push(<TreeLine key={uniqueId()} />);
  }
  return <div className="treelines">{lines}</div>;
};

TreeLines.propTypes = {
  quantity: PropTypes.number
};

TreeLines.defaultProps = {
  quantity: 0
};

export default TreeLines;
