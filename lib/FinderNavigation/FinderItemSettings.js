import React from 'react';
import PropTypes from 'prop-types';

const FinderItemSettings = props => (
  <div className={`finder__item--settings ${props.className}`}>
    {props.children}
  </div>
);

FinderItemSettings.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FinderItemSettings.defaultProps = {
  active: false,
  className: ''
};

export default FinderItemSettings;
