import React from 'react';
import { node, oneOfType, string } from 'prop-types';

const ItemRowName = ({ children, ...props }) => {
  return (
    <div className="item-row__name" {...props}>
      {children}
    </div>
  );
};

ItemRowName.propTypes = {
  children: oneOfType([node, string]).isRequired
};

export { ItemRowName };
