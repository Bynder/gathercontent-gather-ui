import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const FieldActions = (props) => {
  const actions = props.actions.map((action, index) => {
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

  return (
    <div className="field__actions">{actions}</div>
  )
};

FieldActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FieldActions;
