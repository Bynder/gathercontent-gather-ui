import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Col } from 'lib';

const SelectionBarInformation = (props: any) => <Col
  xs={12}
  sm={4}
  md={3}
  className="selection-bar__section selection-bar__information"
>
  {props.children}
</Col>;

SelectionBarInformation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SelectionBarInformation;
