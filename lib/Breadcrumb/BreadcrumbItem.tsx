import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({
  children,
  ...rest
}: any) => (
  <div className="breadcrumb__item" {...rest}>
    {children}
  </div>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default BreadcrumbItem;
