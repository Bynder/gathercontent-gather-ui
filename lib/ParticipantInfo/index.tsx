import React from "react";

export interface ParticipantInfoProps {
  name: string;
  email: string;
  pending?: boolean;
}

export function ParticipantInfo({
  name,
  email,
  pending = false,
}: ParticipantInfoProps) {
  return (
    <div className="gui-participant_info">
      <p className="gui-participant_info__name">{name}</p>
      <p className="gui-participant_info__email">{`${
        pending ? "Pending • " : ""
      }${email}`}</p>
    </div>
  );
}

export default ParticipantInfo;
