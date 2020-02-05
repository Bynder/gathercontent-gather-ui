import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

const SelectionBarInformation = props => (
  <Col
    xs={12}
    sm={4}
    md={3}
    className="selection-bar__section selection-bar__information"
  >
    {props.children}
  </Col>
);

SelectionBarInformation.propTypes = {
  children: PropTypes.func.isRequired
};

export default SelectionBarInformation;
