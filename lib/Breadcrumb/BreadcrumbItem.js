import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({ children }) => (
  <div className="breadcrumb__item">{children}</div>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default BreadcrumbItem;
