import { node, string } from 'prop-types';

export const defaults = {
  className: ''
};

export const types = {
  children: node.isRequired,
  className: string
};
