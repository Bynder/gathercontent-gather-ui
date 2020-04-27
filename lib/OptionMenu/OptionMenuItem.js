import React from 'react';
import { string, func, bool } from 'prop-types';
import Icon from '../Icon';

function OptionMenuItem({ text, onClick, iconName, selected }) {
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

export const optionMenuItemTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string,
  selected: bool
};

OptionMenuItem.propTypes = optionMenuItemTypes;

OptionMenuItem.defaultProps = {
  iconName: null,
  selected: false
};

export { OptionMenuItem };
