import React from "react";
import faker from "faker";
import { RevisionList as RevisionListComponent } from "../RevisionList";
import Avatar from "../../../../Avatar";

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
      </RevisionListComponent.Item>
    </RevisionListComponent>
  );
}
