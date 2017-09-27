import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';

const Field = props => {
  if (props.isLoading) {
    return <div>LOADING!</div>;
  }

  if (props.isReadOnly) {
    return <div>READ ONLY!</div>;
  }

  return (
    <div className="field" data-group-id={props.fieldId}>
      <Row>
        <Col xs={12} sm={4} className="field__data">
          <div className="field__label">{props.label}</div>
          <FieldActions fieldId={props.fieldId} actions={props.actions} />
          <FieldValidations
            fieldId={props.fieldId}
            validations={props.validations}
          />
        </Col>

        <Col xs={12} sm={8}>
          <div className="field__content">
            <div className="field__child">{props.children}</div>

            {props.instructions && (
              <div className="field__instructions">{props.instructions}</div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  children: PropTypes.shape(),
  instructions: PropTypes.string,
  isReadOnly: PropTypes.bool,
  isLoading: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape()),
  validations: PropTypes.arrayOf(PropTypes.shape()),
  fieldId: PropTypes.string.isRequired
};

Field.defaultProps = {
  children: {},
  label: '',
  instructions: '',
  isReadOnly: false,
  isLoading: false,
  actions: [],
  validations: []
};

export default Field;
