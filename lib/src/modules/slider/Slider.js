import React, { Fragment } from 'react';
import { string, number, func, node } from 'prop-types';

export function Slider({
  id,
  labelText,
  labelClass,
  min,
  max,
  step,
  value,
  onChange,
  children
}) {
  return (
    <Fragment>
      <label htmlFor={id} className={labelClass}>
        {labelText}
      </label>
      <input
        id={id}
        className="input-slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      {children}
    </Fragment>
  );
}

Slider.propTypes = {
  id: string,
  labelText: string,
  labelClass: string,
  min: number,
  max: number,
  step: number,
  value: number.isRequired,
  onChange: func.isRequired,
  children: node
};

Slider.defaultProps = {
  id: 'input-slider',
  labelText: 'Slider',
  labelClass: '',
  min: 1,
  max: 100,
  step: 1,
  children: null
};
