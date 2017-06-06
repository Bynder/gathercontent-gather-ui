import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Grid, Row, Col } from 'react-bootstrap/lib';

const Field = (props) => {
  if (props.isLoading) {
    return (
      <div>LOADING!!!</div>
    )
  }

  if (props.isReadOnly) {
    return (
      <div>READ ONLY!!!</div>
    )
  }

  const actions = props.actions.map(action => {
    return (
      <Button
        className="field__action"
        clickHandler={action.clickHandler}
        types={['link-default', 'collapse']}
      >
        {action.text}
      </Button>
    )
  });

  const validation = props.validations.map(action => {
    const cssClass = (action.hasFailed) ? 'has-failed' : '';

    return (
      <span className={`field__validation ${cssClass}`}>{action.text}</span>
    )
  });

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
            <div className="field__actions">{actions}</div>
            <div className="field__validations">{validation}</div>
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
  label: PropTypes.string.isRequired,
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
