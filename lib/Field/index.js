import React from 'react';

const Field = (props) => {
  const actions = props.actions.map(action => {
    return (
      <button onClick={action.clickHandler}>{action.text}</button>
    )
  });

  const validation = props.validations.map(action => {
    const cssClass = (action.hasFailed) ? 'has-failed' : '';

    return (
      <span className={cssClass}>{action.text}</span>
    )
  });

  return (
    <div className="field">
      <div className="grid">
        <div className="grid__cell grid__cell--1-3">
          <div className="field__label">{props.label}</div>
          <div className="field__actions">{actions}</div>
          <div className="field__validation">{validation}</div>
        </div>

        <div className="grid__cell grid__cell--2-3">
          <div className="field__content">{props.children}</div>
          <div className="field__guidelines">{props.guidelines}</div>
        </div>
      </div>
    </div>
  );
}

export default Field;
