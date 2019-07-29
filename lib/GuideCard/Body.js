import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ stepNumber, title, description }) => (
  <div className="guide-card__body">
    <p className="neutral-dark-text">{`${
      stepNumber ? `${stepNumber}. ` : ''
    }${title}`}</p>
    <p>{description}</p>
  </div>
);

Body.propTypes = {
  stepNumber: PropTypes.number,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Body.defaultProps = {
  stepNumber: null
};

export default Body;
