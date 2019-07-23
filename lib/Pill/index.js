import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Pill = props => {
  return (
    <span className={`pill ${props.className}`}>
      {props.children}
      {props.onClearClick ? (
        <button
          type="button"
          onClick={props.onClearClick}
          className="button--clear button--icon-only-padding"
        >
          <Icon name="cross" />
        </button>
      ) : null}
    </span>
  );
};

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  onClearClick: PropTypes.func,
  className: PropTypes.string
};

Pill.defaultProps = {
  onClearClick: null,
  className: ''
};

export default Pill;
