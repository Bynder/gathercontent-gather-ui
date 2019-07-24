import React from 'react';
import PropTypes from 'prop-types';

const HierarchyCollection = ({ className, children, ...rest }) => (
  <div className={`hierarchy-collection ${className}`} {...rest}>
    {children}
  </div>
);

HierarchyCollection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

HierarchyCollection.defaultProps = {
  className: ''
};

export default HierarchyCollection;
