import React from 'react';
import PropTypes from 'prop-types';

const FinderGroup = props => (
  <div className={`finder-group ${props.className}`}>
    {props.title && <span className="finder-group-title">{props.title}</span>}
    {props.children}
  </div>
);

FinderGroup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};

FinderGroup.defaultProps = {
  className: '',
  title: ''
};

export default FinderGroup;
