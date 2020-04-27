import React, { Fragment } from 'react';
import { shape, arrayOf, bool, string } from 'prop-types';
import { OptionMenuItem, optionMenuItemTypes } from './OptionMenuItem';

function OptionMenu({ options, selected, displaySelected }) {
  return (
    <Fragment>
      {options.map(({ text, onClick, iconName, id }) => (
        <OptionMenuItem
          key={id}
          text={text}
          onClick={() => onClick(id)}
          iconName={iconName}
          selected={displaySelected && selected === id}
        />
      ))}
    </Fragment>
  );
}

OptionMenu.propTypes = {
  options: arrayOf(shape(optionMenuItemTypes)).isRequired,
  displaySelected: bool,
  selected: string
};

OptionMenu.defaultProps = {
  displaySelected: false,
  selected: ''
};

export { OptionMenu };
