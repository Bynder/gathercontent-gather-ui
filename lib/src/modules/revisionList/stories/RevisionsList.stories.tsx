import React from "react";
import faker from "faker";
import { RevisionList as RevisionListComponent } from "../RevisionList";
import Avatar from "../../../../Avatar";
import { RevisionListStatus } from "../RevisionListStatus";

export default {
  title: "GUI/RevisionList",
  component: RevisionListComponent,
};

export function RevisionsList() {
  return (
    <RevisionListComponent>
      <RevisionListComponent.Item>
        <RevisionListComponent.Timestamp timestamp="6:33 pm">
          <Avatar url={faker.image.avatar()} />
        </RevisionListComponent.Timestamp>
        <RevisionListStatus
          oldStatusColour="#C2CCD6"
          statusColour="#F9D006"
          statusName="Review"
        />
      </RevisionListComponent.Item>
    </RevisionListComponent>
  );
}
