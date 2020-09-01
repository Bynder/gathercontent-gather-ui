import React from 'react';
import { propTypes, defaultProps } from './common';
import ColFieldHeader from './ColFieldHeader';
import ColFieldLabel from './ColFieldLabel';
import ColFieldBody from './ColFieldBody';
import ColFieldFooter from './ColFieldFooter';
import ColFieldInstructions from './ColFieldInstructions';

function ColField({ children, className, ...props }) {
  return (
    <div
      className={`col-field shadow border border-solid border-neutral-90 rounded relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

ColField.propTypes = propTypes;

ColField.defaultProps = defaultProps;

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;

export default ColField;
