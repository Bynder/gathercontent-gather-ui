import React, { Fragment } from 'react';
import { shape, arrayOf } from 'prop-types';
import { OptionMenuItem, optionMenuItemTypes } from './OptionMenuItem';

function OptionMenu({ options }) {
  return (
    <Fragment>
      {options.map(({ text, onClick, iconName }) => (
        <OptionMenuItem text={text} onClick={onClick} iconName={iconName} />
      ))}
    </Fragment>
  );
}

OptionMenu.propTypes = {
  options: arrayOf(shape(optionMenuItemTypes)).isRequired
};

export { OptionMenu };
