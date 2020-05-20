import { node, string } from 'prop-types';

export const sizes = {
  md: 'md',
  xs: 'xs'
};

export const propTypes = {
  children: node.isRequired,
  className: string
};

export const defaultProps = {
  className: ''
};