import React from 'react';
import { node, string } from 'prop-types';

function TabsActionGroup({
  children,
  className
}: any) {
  return (
    <div
      className={`tabs-action-group absolute right-0 mr-8 z-10 ${className}`}
    >
      {children}
    </div>
  );
}

export { TabsActionGroup };

TabsActionGroup.propTypes = {
  children: node.isRequired,
  className: string
};

TabsActionGroup.defaultProps = {
  className: ''
};
