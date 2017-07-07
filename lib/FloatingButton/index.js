import React from 'react';
import PropTypes from 'prop-types';

const FloatingButton = (props) => {
  return (
    <button
      style={props.position}
      className="button button--floating" type="button"
      onClick={props.onClickHandler}
    >

    </button>
  );
};

FloatingButton.defaultProps = {
  position: {},
};

FloatingButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default FloatingButton;
