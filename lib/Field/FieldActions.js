import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldNew } from 'lib';
import cx from 'classnames';
import Button from '../Button';

const FieldActions = props => {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  const actions = props.actions.map(action => (
    <Button
      key={`${props.fieldId}-action-${action.text}`}
      className="field__action"
      clickHandler={action.clickHandler}
      types={['link-default', 'collapse']}
    >
      {action.text}
    </Button>
  ));

  return (
    <div
      className={cx('field__actions', props.className, {
        'pr-5': inStructureEditMode
      })}
    >
      {actions}
    </div>
  );
};

FieldActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fieldId: PropTypes.string.isRequired,
  className: PropTypes.string
};

FieldActions.defaultProps = {
  className: ''
};

export default FieldActions;
