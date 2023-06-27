import React from 'react';
import { node } from 'prop-types';

const ItemRowName = ({
  children,
  ...props
}: any) => {
  return (
    <div className="item-row__name" {...props}>
      {children}
    </div>
  );
};

ItemRowName.propTypes = {
  children: node.isRequired
};

export { ItemRowName };
