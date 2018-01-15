import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import ExpandingTextArea from '../ExpandingTextArea';

const Field = props => {
  if (props.isLoading) {
    return <div>LOADING!</div>;
  }

  if (props.isReadOnly) {
    return <div>READ ONLY!</div>;
  }

  const additionalClasses = cx({
    field__editor: props.canEdit,
    'has-formatting': props.hasFormatting,
    'is-active': props.isActive
  });

  return (
    <div className={`field ${additionalClasses}`} data-group-id={props.fieldId}>
      <Row>
        <Col xs={12} sm={4} className="field__data">
          {!props.canEdit ? (
            <div className="field__label">{props.label}</div>
          ) : (
            <input
              type="text"
              className="field__label"
              onChange={props.labelChange}
              value={props.label}
            />
          )}
          <FieldActions fieldId={props.fieldId} actions={props.actions} />
          <FieldValidations
            fieldId={props.fieldId}
            validations={props.validations}
          />
        </Col>

        <Col xs={12} sm={8}>
          <div className="field__content">
            <div className="field__child">{props.children}</div>

            {!props.canEdit ? (
              <div className="field__instructions">{props.instructions}</div>
            ) : (
              <ExpandingTextArea
                type="text"
                className="field__instructions"
                handleOnChange={props.instructionChange}
                value={props.instructions}
                placeholder="Add field instructions here..."
              />
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
  canEdit: PropTypes.bool,
  hasFormatting: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape()),
  validations: PropTypes.arrayOf(PropTypes.shape()),
  fieldId: PropTypes.string.isRequired,
  labelChange: PropTypes.func,
  instructionChange: PropTypes.func,
  isActive: PropTypes.bool
};

Field.defaultProps = {
  children: {},
  label: '',
  instructions: '',
  isReadOnly: false,
  isLoading: false,
  canEdit: false,
  hasFormatting: false,
  actions: [],
  validations: [],
  labelChange: () => {},
  instructionChange: () => {},
  isActive: false
};

export default Field;
