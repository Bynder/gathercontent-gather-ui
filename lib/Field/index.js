import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Row from 'react-bootstrap/lib/Row';
import { FieldValidations } from './FieldValidations';
import { FieldActions } from './FieldActions';
import { RepeatableSettings } from './RepeatableSettings';
import { FieldLeft } from './FieldLeft';
import { FieldMiddle } from './FieldMiddle';
import { FieldInstructions } from './FieldInstructions';
import { FieldLabel } from './FieldLabel';
import FieldAside from './FieldAside';
import { FieldInStructureEditModeProvider } from './FieldInStructureEditModeProvider';

const Field = ({
  dir,
  inStructureEditMode,
  hasFormatting,
  isActive,
  disabled,
  fieldId,
  children
}) => {
  const classNames = cx(`group field field--${dir}`, {
    field__editor: inStructureEditMode,
    'has-formatting': hasFormatting,
    'field-is-active': isActive,
    'is-visually-disabled': disabled
  });

  return (
    <FieldInStructureEditModeProvider inStructureEditMode={inStructureEditMode}>
      <div className={classNames} data-group-id={fieldId} dir={dir}>
        <Row>{children}</Row>
      </div>
    </FieldInStructureEditModeProvider>
  );
};

Field.Actions = FieldActions;
Field.Aside = FieldAside;
Field.Instructions = FieldInstructions;
Field.Label = FieldLabel;
Field.Left = FieldLeft;
Field.Middle = FieldMiddle;
Field.Validations = FieldValidations;
Field.RepeatableSettings = RepeatableSettings;

Field.propTypes = {
  inStructureEditMode: PropTypes.bool,
  children: PropTypes.shape().isRequired,
  dir: PropTypes.string,
  disabled: PropTypes.bool,
  fieldId: PropTypes.string.isRequired,
  hasFormatting: PropTypes.bool,
  isActive: PropTypes.bool
};

Field.defaultProps = {
  inStructureEditMode: false,
  dir: 'ltr',
  disabled: false,
  hasFormatting: false,
  isActive: false
};

export default Field;
