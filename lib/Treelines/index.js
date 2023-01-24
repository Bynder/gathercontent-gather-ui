import React from 'react';
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
