import React from 'react';
import PropTypes from 'prop-types';

const SectionFeature = ({ children }) => (
  <div className="section-feature">{children}</div>
);

SectionFeature.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.shape()
  ]).isRequired
};

export default SectionFeature;
