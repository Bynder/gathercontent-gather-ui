import React from 'react';
import PropTypes from 'prop-types';

const Collections = props => (
  <div className="collections">{props.children}</div>
);

Collections.propTypes = {
  children: PropTypes.node.isRequired
};

export default Collections;
