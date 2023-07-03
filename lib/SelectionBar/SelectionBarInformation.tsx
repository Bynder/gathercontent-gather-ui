import React from "react";
import PropTypes from "prop-types";
import { Col } from "lib";

function SelectionBarInformation(props: any) {
  return <Col
    xs={12}
    sm={4}
    md={3}
    className="selection-bar__section selection-bar__information"
  >
    {props.children}
  </Col>
}

SelectionBarInformation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SelectionBarInformation;
