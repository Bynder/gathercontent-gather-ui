import React from 'react';
import { string, func, bool } from 'prop-types';
import Icon from '../Icon';

function Item({ text, onClick, iconName, selected }) {
  return (
    <button
      className="w-48 border-0 flex items-center p-2 text-neutral-20 hover:bg-neutral-95"
      type="button"
      onClick={onClick}
    >
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