import React, { Fragment } from "react";

export function Slider({
  id,
  labelText,
  labelClass,
  min,
  max,
  step,
  value,
  onChange,
  children,
}: any) {
  const valueAsPercent = (((value - min) * 100) / (max - min)).toFixed(0);
  return (
    <>
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
        // @ts-expect-error TS(2322): Type '{ '--val': string; }' is not assignable to t... Remove this comment to see the full error message
        style={{ "--val": valueAsPercent }}
      />
      {children}
    </>
  );
}

Slider.defaultProps = {
  id: "input-slider",
  labelText: "Slider",
  labelClass: "",
  min: 1,
  max: 100,
  step: 1,
  children: null,
};
