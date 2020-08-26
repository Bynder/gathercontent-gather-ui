import React from 'react';
import { node, string } from 'prop-types';
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

ColField.propTypes = {
  children: node.isRequired,
  className: string
};

ColField.defaultProps = {
  className: ''
};

ColField.Header = ColFieldHeader;
ColField.Label = ColFieldLabel;
ColField.Body = ColFieldBody;
ColField.Footer = ColFieldFooter;
ColField.Instructions = ColFieldInstructions;

export default ColField;
