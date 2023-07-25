import React, { useState } from "react";
import faker from "faker";
import { RevisionList as RevisionListComponent } from "../RevisionList";
import Avatar from "../../../../Avatar";
import { RevisionListStatus } from "../RevisionListStatus";
import { ButtonIcon } from "../../Button/ButtonIcon/ButtonIcon";

export default {
  title: "GUI/RevisionList",
  component: RevisionListComponent,
};

export function RevisionsList() {
  const [showNested, setShowNested] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setShowNested(!showNested);
  };
  const LeftContent = (
    <ButtonIcon
      name={showNested ? "down" : "chevronRight"}
      size="sm"
      onClick={onClick}
      className="mt-1"
    />
  );
  return (
    <>
      <RevisionListComponent.Heading>
        April 13, 2023
      </RevisionListComponent.Heading>
      <RevisionListComponent>
        <RevisionListComponent.Item leftContent={LeftContent}>
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
        {showNested && (
          <RevisionListComponent>
            <RevisionListComponent.Item>
              <RevisionListComponent.Timestamp timestamp="6:33 pm">
                <Avatar url={faker.image.avatar()} />
              </RevisionListComponent.Timestamp>
            </RevisionListComponent.Item>
            <RevisionListComponent.Item>
              <RevisionListComponent.Timestamp timestamp="5:33 pm">
                <Avatar url={faker.image.avatar()} />
              </RevisionListComponent.Timestamp>
            </RevisionListComponent.Item>
            <RevisionListComponent.Item>
              <RevisionListComponent.Timestamp timestamp="4:33 pm">
                <Avatar url={faker.image.avatar()} />
              </RevisionListComponent.Timestamp>
            </RevisionListComponent.Item>
          </RevisionListComponent>
        )}
      </RevisionListComponent>
      <RevisionListComponent>
        <RevisionListComponent.Item>
          <RevisionListComponent.Timestamp timestamp="6:33 pm">
            <Avatar url={faker.image.avatar()} />
          </RevisionListComponent.Timestamp>
          <RevisionListStatus statusColour="#F9D006" statusName="Review" />
        </RevisionListComponent.Item>
      </RevisionListComponent>
    </>
  );
}
