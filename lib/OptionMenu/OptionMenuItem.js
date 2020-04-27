import React from 'react';
import { string, func, bool } from 'prop-types';
import Icon from '../Icon';

function OptionMenuItem({ text, onClick, iconName, selected }) {
  return (
    <button type="button" onClick={onClick}>
      {selected && <div>selected</div>}
      {iconName && <Icon name={iconName} />}
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
