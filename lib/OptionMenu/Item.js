import React from 'react';
import { string, func, bool } from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

function Item({ text, onClick, iconName, selected }) {
  const classes = cx(
    'my-1 rounded-small w-48 border-0 flex items-center p-2 hover:bg-neutral-95 focus:outline-none focus:shadow-blue-focus-sm',
    {
      'text-neutral-20': !selected,
      'text-blue-primary': selected
    }
  );

  return (
    <button className={classes} type="button" onClick={onClick}>
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

Item.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string,
  selected: bool
};

Item.defaultProps = {
  iconName: null,
  selected: false
};

export { Item };
