import React from 'react';
import { node, string } from "prop-types";

function TabName({ children, className }) {
  return (
    <div className={`whitespace-no-wrap overflow-hidden w-full ${className}`}>
      {children}
    </div>
  );
}

TabName.propTypes = {
  children: node.isRequired,
  className: string,
};

TabName.defaultProps = {
  className: '',
}

export { TabName };
