import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import Button from '../Button';

export const FieldActions = ({ actions, className }) => {
  const actionButtons = actions.map(({ text, clickHandler }) => (
    <Button
      key={`action-${text}`}
      className="field__action"
      clickHandler={clickHandler}
      types={['link-default', 'collapse']}
    >
      {text}
    </Button>
  ));

  return <div className={`field__actions ${className}`}>{actionButtons}</div>;
};

FieldActions.propTypes = {
  actions: arrayOf(
    shape({
      text: string,
      clickHandler: func
    })
  ).isRequired,
  className: string
};

FieldActions.defaultProps = {
  className: ''
};
