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
    <>
      <RevisionListComponent.Heading>
        April 13, 2023
      </RevisionListComponent.Heading>
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
          <RevisionListComponent.Note>
            Hey @angus - the content is ready for review. Feel free to make any
            necessary changes.
          </RevisionListComponent.Note>
        </RevisionListComponent.Item>
      </RevisionListComponent>
    </>
  );
}
