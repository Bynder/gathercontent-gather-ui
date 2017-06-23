import React from 'react';
import PropTypes from 'prop-types';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import Grid from 'react-bootstrap/lib/Grid';
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
    <div className="field">
      <Grid>
        <Row>
          <Col
            xs={12}
            sm={4}
            md={2}
            mdOffset={1}
            className="field__data"
          >
            <div className="field__label">{props.label}</div>
            <FieldActions actions={props.actions} />
            <FieldValidations validations={props.validations} />
          </Col>

          <Col
            xs={12}
            sm={8}
            md={6}
            className="field__content"
          >
            {props.children}
            <div className="field__instructions">{props.instructions}</div>
          </Col>
        </Row>
      </Grid>
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
};

Field.defaultProps = {
  instructions: '',
  isReadOnly: false,
  isLoading: false,
  actions: [],
  validations: [],
};

export default Field;
