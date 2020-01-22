import React from 'react';
import { shape, string, number } from 'prop-types';
import Pill from '../Pill';

const Item = ({ item: { name, id } }) => {
  return <Pill>{name}</Pill>;
};

Item.propTypes = {
  item: shape({ name: string, id: number }).isRequired
};

export { Item };
