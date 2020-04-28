import { node, string, bool } from 'prop-types';

export const defaults = {
  className: '',
  showShadow: true
};

export const types = {
  children: node.isRequired,
  className: string,
  showShadow: bool
};
