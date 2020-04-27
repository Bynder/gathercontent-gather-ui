import React from 'react';
import { string, func } from 'prop-types';
import Icon from '../Icon';

export const optionMenuItemTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string
};

function OptionMenuItem({ text, onClick, iconName }) {
  return (
    <button type="button" onClick={onClick}>
      {iconName && <Icon name={iconName} />}
      {text}
    </button>
  );
}

OptionMenuItem.propTypes = optionMenuItemTypes;

OptionMenuItem.defaultProps = {
  iconName: null
};

export { OptionMenuItem };
