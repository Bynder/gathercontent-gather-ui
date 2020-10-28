import React, { createContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { bool, node, oneOf, string } from 'prop-types';
import cx from 'classnames';
import {
  FieldContent,
  ACTIVE,
  ADDED,
  DELETED,
  MOVED_UP,
  MOVED_DOWN,
  UNCHANGED
} from './FieldContent';
import { FieldMeta } from './FieldMeta';
import { FieldLabel } from './FieldLabel';
import { FieldInstructions } from './FieldInstructions';
import FieldValidations from './FieldValidations';
import FieldActions from './FieldActions';
import { FieldRepeatableControls } from './FieldRepeatableControls';
import { FieldRepeatButton } from './FieldRepeatButton';
import { FieldConnectorLine } from './FieldConnectorLine';

const InStructureEditModeContext = createContext({
  inStructureEditMode: false
});

export function FieldNew({
  children,
  className,
  dir,
  inStructureEditMode,
  visible
}) {
  const animatedStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 100 }
  });

  return (
    <InStructureEditModeContext.Provider value={{ inStructureEditMode }}>
      <animated.div
        style={animatedStyle}
        className={cx(
          'group grid grid-cols-12 col-gap-8 field field-new has-formatting',
          className
        )}
        dir={dir}
      >
        {children}
      </animated.div>
    </InStructureEditModeContext.Provider>
  );
}

FieldNew.propTypes = {
  children: node.isRequired,
  className: string,
  dir: oneOf(['ltr', 'rtl']),
  inStructureEditMode: bool,
  visible: bool
};

FieldNew.defaultProps = {
  className: '',
  dir: 'ltr',
  inStructureEditMode: false,
  visible: true
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
FieldNew.InStructureEditModeContext = InStructureEditModeContext;
FieldNew.statuses = { ACTIVE, ADDED, DELETED, MOVED_UP, MOVED_DOWN, UNCHANGED };
