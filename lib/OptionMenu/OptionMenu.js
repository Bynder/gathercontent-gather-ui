import React from 'react';
import { node } from 'prop-types';
import { MenuItem } from './MenuItem';

function OptionMenu({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

OptionMenu.propTypes = {
  children: node.isRequired
};

OptionMenu.MenuItem = MenuItem;

export { OptionMenu };
