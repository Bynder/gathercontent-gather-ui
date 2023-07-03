import React from 'react';
import PropTypes from 'prop-types';

function BreadcrumbItem({
  children,
  ...rest
}: any) {
  return <div className="breadcrumb__item" {...rest}>
    {children}
  </div>
}

BreadcrumbItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default BreadcrumbItem;
