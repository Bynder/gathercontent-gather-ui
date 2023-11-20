import React, { HTMLAttributes, ReactNode } from "react";
// @ts-expect-error TS(2307): Cannot find module 'lib/ExpandingTextArea' or its ... Remove this comment to see the full error message
import ExpandingTextArea from "lib/ExpandingTextArea";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'link... Remove this comment to see the full error message
import Linkify from "linkifyjs/react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  instructions?: string | ReactNode;
  editable?: boolean;
}

function ColFieldInstructions({
  instructions,
  className,
  editable,
  onChange,
  placeholder,
  ...props
}: Props) {
  const classes = `gui-col-field__instructions py-4 px-5 border-0 text-sm whitespace-pre-line ${className}`;
  if (editable) {
    return (
      <ExpandingTextArea
        type="text"
        value={instructions}
        className={classes}
        handleOnChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
  return (
    <div className={classes} {...props}>
      <Linkify>{instructions}</Linkify>
    </div>
  );
}

ColFieldInstructions.defaultProps = {
  className: "",
  editable: false,
  onChange: () => {},
  placeholder: "Add some instructions...",
};

export default ColFieldInstructions;
