import React from 'react';
import { node } from 'prop-types';
import { Item } from './Item';

function OptionMenu({ children }) {
  return <div>{children}</div>;
}

OptionMenu.propTypes = {
  children: node.isRequired
};

OptionMenu.Item = Item;

export { OptionMenu };
