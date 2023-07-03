import React from 'react';
import { node } from 'prop-types';

const ItemRowAside = ({
  children,
  ...rest
}: any) => {
  return (
    <div className="item-row__aside" {...rest}>
      {children}
    </div>
  );
};

ItemRowAside.propTypes = {
  children: node.isRequired
};

export { ItemRowAside };
