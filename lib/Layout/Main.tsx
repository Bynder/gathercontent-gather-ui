import React from 'react';
import { node, string } from 'prop-types';

export function Main({
  children,
  className,
  ...rest
}: any) {
  return (
    <main
      className={`layout-main overflow-y-hidden overflow-x-hidden flex flex-1 flex-col relative ${className}`}
      {...rest}
    >
      {children}
    </main>
  );
}

Main.propTypes = {
  children: node.isRequired,
  className: string
};

Main.defaultProps = {
  className: ''
};
