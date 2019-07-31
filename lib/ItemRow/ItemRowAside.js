import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

const ItemRowAside = ({ children, ...rest }) => {
  return (
    <div className="item-row__aside" {...rest}>
      {children}
    </div>
  );
};

ItemRowAside.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
};

export { ItemRowAside };
