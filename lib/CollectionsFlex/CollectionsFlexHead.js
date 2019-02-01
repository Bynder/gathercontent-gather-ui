import React from 'react';
import { propTypes, defaultProps } from './';

const CollectionsFlexHead = ({ children, className, ...props }) => (
  <div className={`collections-flex__head ${className}`} {...props}>
    {children}
  </div>
);

CollectionsFlexHead.propTypes = propTypes;
CollectionsFlexHead.defaultProps = defaultProps;

export default CollectionsFlexHead;
