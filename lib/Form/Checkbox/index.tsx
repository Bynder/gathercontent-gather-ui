import React from "react";
import Label from "../Label";
import Input from "./Input";

export function Checkbox(props: any) {
  return (
    <div className="form__choice-element-wrapper">
      <Input {...props} />
      <Label {...props} />
    </div>
  );
}

export default Checkbox;
