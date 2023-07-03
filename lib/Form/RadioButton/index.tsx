import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import Input from "./Input";

export const RadioButton = (props: any) => (
  <div className="form__choice-element-wrapper" key={props.id}>
    <Input {...props} />
    <Label {...props} />
  </div>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RadioButton;
