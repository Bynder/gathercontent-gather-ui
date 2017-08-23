import React from 'react';
import PropTypes from 'prop-types';

const FieldAside = props => (
  <div className="field__aside">
    {props.children}
  </div>
);

FieldAside.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FieldAside;
