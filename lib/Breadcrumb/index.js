import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/';

const Breadcrumb = ({ children, className, ...props }) => (
  <nav {...props} className={`breadcrumb ${className}`}>
    {React.Children.map(children, (child, index) => (
      <div className="breadcrumb__item">
        {React.cloneElement(child, {})}
        {index !== children.length - 1 && (
          <Icon className="breadcrumb__separator" name="chevronRight" />
        )}
      </div>
    ))}
  </nav>
);

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  className: PropTypes.string
};

Breadcrumb.defaultProps = {
  className: ''
};

export default Breadcrumb;
