import { func, node, string, bool } from 'prop-types';

export const defaults = {
  clickHandler: null,
  className: '',
  center: false,
  onClose: null
};

export const types = {
  clickHandler: func,
  children: node.isRequired,
  className: string,
  center: bool,
  onClose: func
};
