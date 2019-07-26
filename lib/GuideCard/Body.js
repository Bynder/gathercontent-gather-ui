import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ stepNumber, title }) => (
  <div className="guide-card__body">
    <p className="neutral-dark-text">{`${
      stepNumber ? `${stepNumber}. ` : ''
    }${title}`}</p>
  </div>
);

Body.propTypes = {
  stepNumber: PropTypes.number,
  title: PropTypes.string.isRequired
};

Body.defaultProps = {
  stepNumber: null
};

export default Body;
