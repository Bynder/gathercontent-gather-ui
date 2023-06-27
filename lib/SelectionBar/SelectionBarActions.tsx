import React from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Col } from 'lib';

const SelectionBarActions = ({
  children
}: any) => (
  <Col
    xs={12}
    sm={5}
    md={6}
    className="selection-bar__section selection-bar__actions"
  >
    {children}
  </Col>
);

SelectionBarActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default SelectionBarActions;
