import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SectionFeature = ({ children, extendTop, enhanceIntro, className }) => {
  const classNames = cx(`section-feature ${className}`, {
    'section-feature--extend-top': extendTop,
    'section-feature--enhance-intro': enhanceIntro
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
  enhanceIntro: PropTypes.bool,
  className: PropTypes.string
};

SectionFeature.defaultProps = {
  extendTop: false,
  enhanceIntro: false,
  className: ''
};

export default SectionFeature;
