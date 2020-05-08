import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Linkify from 'linkifyjs/react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import ExpandingTextArea from '../ExpandingTextArea';
import EditableTextWrapper from '../EditableTextWrapper';
import { RepeatableSettings } from './RepeatableSettings';

const Field = props => {
  const classNames = cx(`group field field--${props.dir}`, {
    field__editor: props.canEdit,
    'has-formatting': props.hasFormatting,
    'field-is-active': props.isActive,
    'is-visually-disabled': props.disabled
  });

  const dataRowSize = props.canEdit ? 3 : 4;

  return (
    <div className={classNames} data-group-id={props.fieldId} dir={props.dir}>
      <Row>
        <Col
          xs={12}
          sm={dataRowSize}
          className={`field__data ${props.isRepeatable ? '' : 'pt-6'}`}
        >
          {props.isRepeatable && (
            <RepeatableSettings
              isTextDirLTR={props.dir === 'ltr'}
              fieldIsActive={props.isActive}
              isLastRepeat={props.isLastRepeat}
              repeatPosition={props.repeatPosition}
            />
          )}
          {!props.canEdit ? (
            <div className="field__label">{props.label}</div>
          ) : (
            <EditableTextWrapper
              value={props.label}
              className="field__label"
              onChange={value => props.labelChange(value)}
              multiline
              inputLabel={`edit field label: ${props.label}`}
            >
              {props.label}
            </EditableTextWrapper>
          )}
          <FieldValidations
            fieldId={props.fieldId}
            validations={props.validations}
          />
          <FieldActions fieldId={props.fieldId} actions={props.actions} />
        </Col>

        <Col xs={12} sm={8} className="field__content--wrapper">
          <div className="field__content border border-solid border-neutral-90">
            <div className="field__child">{props.children}</div>
            {!props.canEdit ? (
              props.instructions && (
                <div className="field__instructions">
                  <Linkify>{props.instructions}</Linkify>
                </div>
              )
            ) : (
              <ExpandingTextArea
                type="text"
                className="field__instructions"
                handleOnChange={props.instructionChange}
                value={props.instructions}
                placeholder={props.instructionsPlaceholder}
                minRows={props.instructionsMinRows}
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
  disabled: PropTypes.bool,
  canEdit: PropTypes.bool,
  hasFormatting: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape()),
  validations: PropTypes.arrayOf(PropTypes.shape()),
  fieldId: PropTypes.string.isRequired,
  labelChange: PropTypes.func,
  instructionChange: PropTypes.func,
  isActive: PropTypes.bool,
  instructionsPlaceholder: PropTypes.string,
  instructionsMinRows: PropTypes.number,
  dir: PropTypes.string,
  isRepeatable: PropTypes.bool,
  repeatPosition: PropTypes.number,
  isLastRepeat: PropTypes.bool
};

Field.defaultProps = {
  children: {},
  label: '',
  instructions: '',
  disabled: false,
  canEdit: false,
  hasFormatting: false,
  actions: [],
  validations: [],
  labelChange: () => {},
  instructionChange: () => {},
  isActive: false,
  instructionsPlaceholder: 'Add field instructions here...',
  instructionsMinRows: 1,
  dir: 'ltr',
  isRepeatable: false,
  repeatPosition: 0,
  isLastRepeat: false
};

export default Field;
