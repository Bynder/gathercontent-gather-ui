import React from 'react';
import PropTypes from 'prop-types';

const FinderGroup = ({
  className,
  title,
  children,
  meta
}: any) => (
  <div className={`finder-group ${className}`}>
    {(title || meta) && (
      <div className="finder-group-heading">
        {title && <span className="finder-group-title">{title}</span>}
        {!!meta && <div className="finder-group-meta">{meta}</div>}
      </div>
    )}
    {children}
  </div>
);

FinderGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.node
};

FinderGroup.defaultProps = {
  className: '',
  title: '',
  meta: null
};

export default FinderGroup;
