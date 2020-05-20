import React, { createContext } from 'react';
import { bool, node, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { FieldContent } from './FieldContent';
import { FieldMeta } from './FieldMeta';
import { FieldLabel } from './FieldLabel';
import { FieldInstructions } from './FieldInstructions';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import { FieldRepeatableControls } from './FieldRepeatableControls';
import { FieldRepeatButton } from './FieldRepeatButton';
import { FieldConnectorLine } from './FieldConnectorLine';
import { FieldMainColumn } from './FieldMainColumn';

const InStructureEditModeContext = createContext({
  inStructureEditMode: false
});

export function FieldNew({ children, className, dir, inStructureEditMode }) {
  return (
    <InStructureEditModeContext.Provider value={{ inStructureEditMode }}>
      <div
        className={cx(
          'group grid grid-cols-12 col-gap-8 field field-new has-formatting',
          className
        )}
        dir={dir}
      >
        {children}
      </div>
    </InStructureEditModeContext.Provider>
  );
}

FieldNew.propTypes = {
  children: node.isRequired,
  className: string,
  dir: oneOf(['ltr', 'rtl']),
  inStructureEditMode: bool
};

FieldNew.defaultProps = {
  className: '',
  dir: 'ltr',
  inStructureEditMode: false
};

FieldNew.Content = FieldContent;
FieldNew.Meta = FieldMeta;
FieldNew.Label = FieldLabel;
FieldNew.Instructions = FieldInstructions;
FieldNew.Validations = FieldValidations;
FieldNew.Actions = FieldActions;
FieldNew.RepeatableControls = FieldRepeatableControls;
FieldNew.RepeatButton = FieldRepeatButton;
FieldNew.ConnectorLine = FieldConnectorLine;
FieldNew.MainColumn = FieldMainColumn;
FieldNew.InStructureEditModeContext = InStructureEditModeContext;
