import { string, node } from 'prop-types';

export const sizes = {
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export const propTypes = {
  children: node.isRequired,
  className: string,
  type: string,
  size: string
};

export const defaultProps = {
  className: '',
  type: 'button',
  size: sizes.md
};
