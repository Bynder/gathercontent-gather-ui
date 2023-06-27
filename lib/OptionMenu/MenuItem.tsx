import React from 'react';
import { string, func, bool } from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

function MenuItem({
  text,
  iconName,
  selected,
  className,
  iconTitle,
  ...rest
}: any) {
  const classes = cx(
    className,
    'bg-white hover:bg-neutral-95',
    'rounded-small w-48 border-0',
    'py-1 px-2',
    'mb-1',
    'flex items-center',
    'focus:outline-none focus:shadow-blue-focus-sm',
    {
      'text-neutral-20': !selected,
      'text-blue-primary': selected
    }
  );

  return (
    <button className={classes} type="button" {...rest}>
      {iconName && (
        <Icon
          className="pr-2"
          name={iconName}
          defaultActiveColor={false}
          types={selected ? ['primary-blue'] : []}
          title={iconTitle}
        />
      )}
      {text}
    </button>
  );
}

MenuItem.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string,
  iconTitle: string,
  selected: bool,
  className: string
};

MenuItem.defaultProps = {
  iconName: null,
  iconTitle: '',
  selected: false,
  className: ''
};

export { MenuItem };
