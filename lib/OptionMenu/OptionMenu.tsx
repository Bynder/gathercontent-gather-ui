import React from 'react';
import { node, string } from 'prop-types';
import { MenuItem } from './MenuItem';

function OptionMenu({
  children,
  className,
  ...rest
}: any) {
  return (
    <div className={`${className} px-4 py-2`} {...rest}>
      {children}
    </div>
  );
}

OptionMenu.propTypes = {
  children: node.isRequired,
  className: string
};

OptionMenu.defaultProps = {
  className: ''
};

OptionMenu.MenuItem = MenuItem;

export { OptionMenu };
