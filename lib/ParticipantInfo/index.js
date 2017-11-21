import React from 'react';
import PropTypes from 'prop-types';

const ParticipantInfo = ({ name, email, pillboxText }) => (
  <div className="participant_info">
    <p className="participant_info__name">{name}</p>
    <p className="participant_info__email">{email}</p>

    {pillboxText && <span className="pillbox">{pillboxText}</span>}
  </div>
);

ParticipantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pillboxText: PropTypes.string
};

ParticipantInfo.defaultProps = {
  pillboxText: ''
};

export default ParticipantInfo;
