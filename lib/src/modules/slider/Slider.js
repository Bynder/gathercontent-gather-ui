import React, { Fragment } from 'react';
import { number, func, node } from 'prop-types';

export function Slider({ min, max, step, value, onChange, children }) {
  return (
    <Fragment>
      <input
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
  min: number,
  max: number,
  step: number,
  value: number.isRequired,
  onChange: func.isRequired,
  children: node
};

Slider.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
  children: null
};
