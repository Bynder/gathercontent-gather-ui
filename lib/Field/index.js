import React from 'react';
import Button from '../Button';

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
        onClick={action.clickHandler}
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
      <div className="grid">
        <div className="grid__cell grid__cell--1-4 field__data">
          <div className="field__label">{props.label}</div>
          <div className="field__actions">{actions}</div>
          <div className="field__validations">{validation}</div>
        </div>

        <div className="grid__cell grid__cell--3-4 field__content">
          {props.children}
          <div className="field__instructions">{props.instructions}</div>
        </div>
      </div>
    </div>
  );
}

export default Field;
