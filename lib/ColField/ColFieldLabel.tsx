import React, { HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import { RenameInput } from "lib";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string | ReactNode;
  editable?: string;
  multiline?: boolean;
  insetInput?: boolean;
  formClass?: string;
  maxLength?: number;
}

function ColFieldLabel({
  label,
  className,
  editable,
  onChange,
  multiline,
  insetInput,
  formClass,
  placeholder,
  maxLength,
  ...props
}: Props) {
  if (editable) {
    const classes = cx({
      "-m-05": insetInput,
    });

    return (
      <div className={classes}>
        <RenameInput
          text={label}
          size={RenameInput.sizes.lrg}
          onRename={onChange}
          multiline={multiline}
          label={`edit field label: ${label}`}
          className={`col-field-label col-field-label-editable ${className}`}
          formClass={formClass}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      </div>
    );
  }
  return (
    <div className={`col-field-label break-all ${className}`} {...props}>
      {label}
    </div>
  );
}

ColFieldLabel.defaultProps = {
  className: "",
  editable: false,
  onChange: () => {},
  multiline: false,
  insetInput: true,
  formClass: "",
  placeholder: "Enter a field label",
};

export default ColFieldLabel;
