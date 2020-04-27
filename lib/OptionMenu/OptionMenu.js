import React, { Fragment } from 'react';
import { shape, arrayOf } from 'prop-types';
import { OptionMenuItem, optionMenuItemTypes } from './OptionMenuItem';

function OptionMenu({ options }) {
  return (
    <Fragment>
      {options.map(option => (
        <OptionMenuItem option={option} />
      ))}
    </Fragment>
  );
}

OptionMenu.propTypes = {
  options: arrayOf(shape(optionMenuItemTypes)).isRequired
};

export { OptionMenu };
