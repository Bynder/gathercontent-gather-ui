import React from 'react';
import { node, string } from 'prop-types';
import { MenuItem } from './MenuItem';

function OptionMenu({ children, className }) {
  return <div className={className}>{children}</div>;
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
