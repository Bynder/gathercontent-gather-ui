import React from 'react';
import { node, string } from 'prop-types';

export function Section({ children, className }) {
  return <section className={`${className}`}>{children}</section>;
}

Section.propTypes = {
  children: node.isRequired,
  className: string
};

Section.defaultProps = {
  className: ''
};
