import React from 'react';
import { string, func } from 'prop-types';
import Icon from '../Icon';

function OptionMenuItem({ text, onClick, iconName }) {
  return (
    <button type="button" onClick={onClick}>
      {iconName && <Icon name={iconName} />}
      {text}
    </button>
  );
}

OptionMenuItem.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string
};

OptionMenuItem.defaultProps = {
  iconName: null
};

export { OptionMenuItem };
