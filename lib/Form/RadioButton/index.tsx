import React from "react";
import Label from "../Label";
import Input from "./Input";

export function RadioButton(props: any) {
  return (
    <div className="form__choice-element-wrapper" key={props.id}>
      <Input {...props} />
      <Label {...props} />
    </div>
  );
}

export default RadioButton;
