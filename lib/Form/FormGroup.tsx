import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({
  children
}: any) => (
  <div className="form-group">{children}</div>
);

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormGroup;
