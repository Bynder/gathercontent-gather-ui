import React from "react";
import ParticipantInfoComponent from "../../lib/ParticipantInfo";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Participant Info",
  component: ParticipantInfoComponent,
};

export function ParticipantInfo() {
  return (
    <div>
      <StoryItem
        title="Page information: Just a title"
        description="Includes a title as a minimum"
      >
        <ParticipantInfoComponent
          name="Angus Edwardson"
          email="example@gmail.com"
        />
        <br />
        <ParticipantInfoComponent
          name="Alan Turing"
          email="alan@turing.com"
          pending
        />
      </StoryItem>
    </div>
  );
}
ParticipantInfo.parameters = {
  controls: { hideNoControlsWarning: true },
};
