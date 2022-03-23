import React from 'react';
import PropTypes from 'prop-types';

const ParticipantInfo = ({ name, email }) => (
  <div className="participant_info">
    <p className="participant_info__name">{name}</p>
    <p className="participant_info__email">{email}</p>
  </div>
);

ParticipantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ParticipantInfo;
