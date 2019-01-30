import React from 'react';
import PropTypes from 'prop-types';

const FinderItemContent = props => (
  <div className={`finder__item--content ${props.className}`}>
    {props.children}
  </div>
);

FinderItemContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FinderItemContent.defaultProps = {
  active: false,
  className: ''
};

export default FinderItemContent;
