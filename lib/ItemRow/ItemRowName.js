import React from 'react';
import { node, oneOfType, string } from 'prop-types';

const ItemRowName = ({ children, status, ...props }) => {
  return (
    <div className="item-row__name" {...props}>
      {status}
      {children}
    </div>
  );
};

ItemRowName.propTypes = {
  children: oneOfType([node, string]).isRequired,
  status: node
};

ItemRowName.defaultProps = {
  status: null
};

export { ItemRowName };
