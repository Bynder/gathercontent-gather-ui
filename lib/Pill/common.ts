import { node, oneOf, string } from 'prop-types';

export const sizes = {
  md: 'md',
  xs: 'xs',
  xxs: 'xxs'
};

export const propTypes = {
  children: node.isRequired,
  className: string,
  size: oneOf(Object.keys(sizes))
};

export const defaultProps = {
  className: '',
  size: sizes.md
};

export const types = {
  default: 'default',
  red: 'red',
  green: 'green',
  purple: 'purple',
  yellow: 'yellow',
  greenWhiteText: 'greenWhiteText',
  blueWhiteText: 'blueWhiteText',
  beta: 'beta'
};
