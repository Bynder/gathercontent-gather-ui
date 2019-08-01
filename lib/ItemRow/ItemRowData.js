import React from 'react';
import { node } from 'prop-types';

const ItemRowData = ({ children, ...rest }) => {
  return (
    <div className="item-row__data" {...rest}>
      {children}
    </div>
  );
};

ItemRowData.propTypes = {
  children: node.isRequired
};

export { ItemRowData };
