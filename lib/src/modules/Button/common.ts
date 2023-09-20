

export const sizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export const getSizeClasses = (size: any) => {
  if (!size) {
    return '';
  }

  if (size === sizes.lg) {
    return 'w-12 h-12';
  }

  if (size === sizes.md) {
    return 'w-8 h-8';
  }

  return 'w-6 h-6';
};


export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loaderRight?: boolean;
  size?: string | boolean;
  connectedLeft?: boolean;
  connectedRight?: boolean;
}

export const defaultProps = {
  className: '',
  type: 'button',
  loading: false,
  loaderRight: false,
  size: sizes.md,
  disabled: false,
  connectedLeft: false,
  connectedRight: false,
  onClick: () => {}
};


export const buttonIconDefaultProps = {
  ...defaultProps,
  active: false,
  defaultFillColor: true
};
