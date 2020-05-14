import { node, string } from 'prop-types';

export const types = {
  children: node.isRequired,
  className: string
};

export const defaults = {
  className: ''
};
