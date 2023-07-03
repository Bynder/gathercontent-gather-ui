import React from 'react';
import PropTypes from 'prop-types';

function SelectionBarAction({
  children
}: any) {
  return <div className="selection-bar__action">{children}</div>
}

SelectionBarAction.propTypes = {
  children: PropTypes.node.isRequired
};

export default SelectionBarAction;
