import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SectionFeature = ({ children, extendTop, className }) => {
  const classNames = cx(`section-feature ${className}`, {
    'section-feature--extend-top': extendTop
  });

  return <div className={classNames}>{children}</div>;
};

SectionFeature.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.shape()
  ]).isRequired,
  extendTop: PropTypes.bool,
  className: PropTypes.string
};

SectionFeature.defaultProps = {
  extendTop: false,
  className: ''
};

export default SectionFeature;
