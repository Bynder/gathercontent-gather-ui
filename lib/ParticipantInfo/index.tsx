import React from "react";

export function ParticipantInfo({ name, email }: any) {
  return (
    <div className="gui-participant_info">
      <p className="gui-participant_info__name">{name}</p>
      <p className="gui-participant_info__email">{email}</p>
    </div>
  );
}

export default ParticipantInfo;
