import React from 'react';
import PropTypes from 'prop-types';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const Field = (props) => {
  if (props.isLoading) {
    return (
      <div>LOADING!</div>
    )
  }

  if (props.isReadOnly) {
    return (
      <div>READ ONLY!</div>
    )
  }

  return (
    <div className="field" data-group-id={props.fieldId}>
      <Row>
        <Col
          xs={12}
          sm={4}
          className="field__data"
        >
          <div className="field__label">{props.label}</div>
          <FieldActions actions={props.actions} />
          <FieldValidations validations={props.validations} />
        </Col>

        <Col
          xs={12}
          sm={8}
          className="field__content"
        >
          {props.children}
          <div className="field__instructions">{props.instructions}</div>
        </Col>
      </Row>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  instructions: PropTypes.string,
  isReadOnly: PropTypes.bool,
  isLoading: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape()),
  validations: PropTypes.arrayOf(PropTypes.shape()),
  fieldId: PropTypes.string,
};

Field.defaultProps = {
  instructions: '',
  isReadOnly: false,
  fieldId: '',
  isLoading: false,
  actions: [],
  validations: [],
};

export default Field;
