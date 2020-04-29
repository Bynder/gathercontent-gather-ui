import React from 'react';
import { string, func, bool } from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

function MenuItem({ text, iconName, selected, ...rest }) {
  const classes = cx(
    'my-1 rounded-small w-48 border-0 flex items-center py-1 px-2 hover:bg-neutral-95 focus:outline-none focus:shadow-blue-focus-sm',
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
  selected: bool
};

MenuItem.defaultProps = {
  iconName: null,
  selected: false
};

export { MenuItem };
