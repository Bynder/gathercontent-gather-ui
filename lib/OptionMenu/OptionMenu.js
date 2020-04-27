import React, { Fragment } from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import { OptionMenuItem } from './OptionMenuItem';

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
  options: arrayOf(
    shape({
      text: string,
      onClick: func,
      iconName: string
    })
  ).isRequired
};

export { OptionMenu };
