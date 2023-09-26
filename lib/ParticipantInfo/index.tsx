import React from "react";

export function ParticipantInfo({ name, email }: any) {
  return (
    <div className="participant_info">
      <p className="participant_info__name">{name}</p>
      <p className="participant_info__email">{email}</p>
    </div>
  );
}

export default ParticipantInfo;
