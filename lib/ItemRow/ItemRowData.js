import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

const ItemRowData = ({ children, ...rest }) => {
  return (
    <div className="item-row__data" {...rest}>
      {children}
    </div>
  );
};

ItemRowData.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

export { ItemRowData };
