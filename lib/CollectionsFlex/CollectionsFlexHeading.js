import React from 'react';
import { propTypes, defaultProps } from './';
import CollectionsFlexCellContent from './CollectionsFlexCellContent';

const CollectionsFlexHeading = ({ children, className, ...props }) => (
  <div className={`collections-flex__heading ${className}`} {...props}>
    <CollectionsFlexCellContent>{children}</CollectionsFlexCellContent>
  </div>
);

CollectionsFlexHeading.propTypes = propTypes;
CollectionsFlexHeading.defaultProps = defaultProps;

export default CollectionsFlexHeading;
