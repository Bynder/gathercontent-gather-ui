import React, { Fragment } from 'react';
import { node } from 'prop-types';
import { Item } from './Item';

function OptionMenu({ children }) {
  return <Fragment>{children}</Fragment>;
}

OptionMenu.propTypes = {
  children: node.isRequired
};

OptionMenu.Item = Item;

export { OptionMenu };
