import React, { Fragment } from "react";
import {
  Dropdown as DropdownComponent,
  Avatar,
  AvatarInformation,
  Icon,
  ConfirmationDropdown,
} from "lib";
import StoryItem from "../styleguide/StoryItem";
import StatusIndicator from "../../lib/StatusIndicator";
import Form from "../../lib/Form";
import FormInput from "../../lib/Form/FormInput";

export default {
  title: "Legacy/Dropdowns/Dropdown",
  component: DropdownComponent,
};

const createDelayedPromise = (timeout = 2000) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, timeout));

const createContentWithItems = (props: any) => (
  <DropdownComponent.Content {...props} collapse>
    <DropdownComponent.ActionGroup>
      <DropdownComponent.Action action={() => {}} selected>
        DropdownComponent item 1
      </DropdownComponent.Action>
      <DropdownComponent.Action action={() => {}}>
        DropdownComponent item 2
      </DropdownComponent.Action>
      <DropdownComponent.Action action={() => {}}>
        DropdownComponent item 3
      </DropdownComponent.Action>
    </DropdownComponent.ActionGroup>

    <DropdownComponent.ActionGroup>
      <DropdownComponent.Action action={() => {}} danger>
        Danger dropdown item
      </DropdownComponent.Action>
    </DropdownComponent.ActionGroup>
  </DropdownComponent.Content>
);

export function Dropdown() {
  return (
    <div>
      <StoryItem
        title="DropdownComponent"
        description="A dropdown contains a trigger and content. Both can be take any form."
      >
        <DropdownComponent id="id-1">
          <DropdownComponent.Trigger>
            <strong>Click on me to show the dropdown</strong>
          </DropdownComponent.Trigger>

          <DropdownComponent.Content>
            <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
              <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
            </Avatar>
          </DropdownComponent.Content>
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with inner menu"
        description="An example of a dropdown within a dropdown"
      >
        <DropdownComponent id="id-dropdown">
          <DropdownComponent.Trigger useButton>
            Show content
          </DropdownComponent.Trigger>

          <DropdownComponent.Content collapse>
            <DropdownComponent.ActionGroup>
              <DropdownComponent.Action
                className="flex items-center"
                action={() => {}}
              >
                <Icon name="sparkle" className="mr-2" /> Improve writing
              </DropdownComponent.Action>
              <DropdownComponent.Action
                className="flex items-center"
                action={() => {}}
              >
                <Icon name="spelling" className="mr-2" /> Fix spelling & grammar
              </DropdownComponent.Action>
              <DropdownComponent.Action
                className="flex items-center"
                action={() => {}}
              >
                <Icon name="textLong" className="mr-2" /> Extend
              </DropdownComponent.Action>
              <DropdownComponent.Action
                className="flex items-center"
                action={() => {}}
              >
                <Icon name="textShort" className="mr-2" /> Shorten
              </DropdownComponent.Action>
              <DropdownComponent.Action
                hideAfterPerformingAction={false}
                action={() => {}}
                className="overflow-visible w-full text-left"
              >
                <DropdownComponent className="w-full" id="id-dropdown-2">
                  <DropdownComponent.Trigger triggerClassName="flex items-center w-full">
                    <Icon name="emoji" className="mr-2" /> Change tone{" "}
                    <Icon
                      name="caretRight"
                      defaultFillColor={false}
                      defaultActiveColor={false}
                      className="ml-auto icon--neutral-70"
                    />
                  </DropdownComponent.Trigger>
                  <DropdownComponent.Content
                    className="top-0 left-100%"
                    collapse
                  >
                    <DropdownComponent.ActionGroup>
                      <DropdownComponent.Action action={() => {}}>
                        Professional
                      </DropdownComponent.Action>
                      <DropdownComponent.Action action={() => {}}>
                        Confident
                      </DropdownComponent.Action>
                      <DropdownComponent.Action action={() => {}}>
                        Understanding
                      </DropdownComponent.Action>
                      <DropdownComponent.Action action={() => {}}>
                        Casual
                      </DropdownComponent.Action>
                    </DropdownComponent.ActionGroup>
                  </DropdownComponent.Content>
                </DropdownComponent>
              </DropdownComponent.Action>
            </DropdownComponent.ActionGroup>
          </DropdownComponent.Content>
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with Button triggers"
        description="Triggers can also use the Button component, which is common."
      >
        <DropdownComponent id="id-2">
          <DropdownComponent.Trigger useButton>
            Show content
          </DropdownComponent.Trigger>

          <DropdownComponent.Content>
            {(showContent: any) => (
              <button type="button" tabIndex={showContent ? 0 : -1}>
                Focusable element
              </button>
            )}
          </DropdownComponent.Content>
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with different alignments"
        description="The dropdown content can be aligned to different points of the trigger."
      >
        <DropdownComponent id="id-3">
          <DropdownComponent.Trigger useButton>
            Left alignment
          </DropdownComponent.Trigger>
          {createContentWithItems({})}
        </DropdownComponent>

        <DropdownComponent id="id-4">
          <DropdownComponent.Trigger useButton>
            Centre alignment
          </DropdownComponent.Trigger>

          {createContentWithItems({ centre: true })}
        </DropdownComponent>

        <DropdownComponent id="id-5">
          <DropdownComponent.Trigger useButton>
            Right alignment
          </DropdownComponent.Trigger>

          {createContentWithItems({ right: true })}
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with top alignment"
        description="The dropdown content can also be vertically aligned so it appears above the trigger."
      >
        <DropdownComponent id="id-6">
          <DropdownComponent.Trigger useButton>
            Top left alignment
          </DropdownComponent.Trigger>

          {createContentWithItems({ top: true })}
        </DropdownComponent>

        <DropdownComponent id="id-7">
          <DropdownComponent.Trigger useButton>
            Top centre alignment
          </DropdownComponent.Trigger>

          {createContentWithItems({ top: true, centre: true })}
        </DropdownComponent>

        <DropdownComponent id="id-8">
          <DropdownComponent.Trigger useButton>
            Top right alignment
          </DropdownComponent.Trigger>

          {createContentWithItems({ top: true, right: true })}
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with right alignment"
        description="The dropdown content can also be horizontally aligned."
      >
        <DropdownComponent id="id-9">
          <DropdownComponent.Trigger useButton>
            fixRight alignment collapse
          </DropdownComponent.Trigger>

          <DropdownComponent.Content fixRight collapse noBorder>
            <DropdownComponent.ActionGroup horizontal>
              {/* @ts-expect-error */}
              <DropdownComponent.Action action={() => {}} plain>
                <Icon name="bulletList" defaultActiveColor={false} />
              </DropdownComponent.Action>
              {/* @ts-expect-error */}
              <DropdownComponent.Action action={() => {}} plain>
                <Icon name="numberedList" defaultActiveColor={false} />
              </DropdownComponent.Action>
              {/* @ts-expect-error */}
              <DropdownComponent.Action action={() => {}} plain>
                <Icon name="table" defaultActiveColor={false} />
              </DropdownComponent.Action>
              {/* @ts-expect-error */}
              <DropdownComponent.Action action={() => {}} plain>
                <Icon name="quote" defaultActiveColor={false} />
              </DropdownComponent.Action>
            </DropdownComponent.ActionGroup>
          </DropdownComponent.Content>
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with auto positioning"
        description="The dropdown content have auto positioning based on where the trigger is."
      >
        <DropdownComponent id="id-3" autoPosition>
          <DropdownComponent.Trigger useButton>
            Auto Position
          </DropdownComponent.Trigger>

          {createContentWithItems({})}
        </DropdownComponent>
      </StoryItem>

      <StoryItem
        title="DropdownComponent with un-rendered content and auto positioning"
        description="A dropdown where we don't render the dropdown content until the dropdown is active"
      >
        <DropdownComponent id="id-3-b" autoPosition>
          {({ showContent }: any) => (
            <>
              <DropdownComponent.Trigger useButton>
                Auto Position
              </DropdownComponent.Trigger>

              {showContent && createContentWithItems({})}
            </>
          )}
        </DropdownComponent>
      </StoryItem>
      <StoryItem
        title="Confirmation DropdownComponent"
        description="A dropdown like component that renders a confirmation dropdown."
      >
        <ConfirmationDropdown
          // @ts-expect-error
          id="confirm-dropdown"
          confirmationText="Archive"
          confirmationPromise={createDelayedPromise}
          dropdownContent={
            <>
              <DropdownComponent.Header>
                <h3>Archive 1 item</h3>
              </DropdownComponent.Header>
              <DropdownComponent.Section>
                <p>
                  The selected item(s) will be moved to your project's archived
                  items section.
                </p>
                <p>
                  Arching items will disconnect any applied templates, and also
                  remove assignees and due-dates.
                </p>
              </DropdownComponent.Section>
            </>
          }
          isDanger
        >
          <Icon name="archive" />
        </ConfirmationDropdown>

        <ConfirmationDropdown
          // @ts-expect-error
          id="trash-dropdown-2"
          confirmationText="Archive"
          confirmationPromise={createDelayedPromise}
          dropdownContent={
            <>
              <DropdownComponent.Header>
                <h3>Archive 1 item</h3>
                <ConfirmationDropdown
                  // @ts-expect-error
                  id="confirm-sub-dropdown"
                  confirmationText="Archive all"
                  dropdownContent={
                    <>
                      <DropdownComponent.Header>
                        <h3>Remove all items</h3>
                      </DropdownComponent.Header>
                      <DropdownComponent.Section>
                        <p>Do you wish to archive all items?</p>
                      </DropdownComponent.Section>
                    </>
                  }
                  confirmationPromise={createDelayedPromise}
                  position={{
                    bottom: true,
                    left: true,
                  }}
                  isDanger
                  collapse
                >
                  Archive all items
                </ConfirmationDropdown>
              </DropdownComponent.Header>
              <DropdownComponent.ActionGroup bordered collapse>
                <DropdownComponent.Action action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
                <DropdownComponent.Action action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
                <DropdownComponent.Action selected action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
              </DropdownComponent.ActionGroup>
            </>
          }
          isDanger
          collapse
        >
          <Icon name="trash" />
        </ConfirmationDropdown>

        <ConfirmationDropdown
          // @ts-expect-error
          id="trash-dropdown-3"
          confirmationText="Do a thing"
          confirmationPromise={createDelayedPromise}
          dropdownContent={
            <>
              <DropdownComponent.Header collapse>
                <Form onSubmit={() => {}} className="form h-width-100">
                  <FormInput
                    noBorder
                    className="h-width-100"
                    placeholder="Search for users"
                  />
                </Form>
              </DropdownComponent.Header>
              <DropdownComponent.ActionGroup bordered collapse>
                <DropdownComponent.Action action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
                <DropdownComponent.Action action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
                <DropdownComponent.Action selected action={() => {}}>
                  <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg">
                    <AvatarInformation email="heythere@lol.com" name="Mr Ben" />
                  </Avatar>
                </DropdownComponent.Action>
              </DropdownComponent.ActionGroup>
            </>
          }
          isDanger
          collapse
        >
          <Icon name="userEdit" />
        </ConfirmationDropdown>
      </StoryItem>

      <StoryItem
        title="DropdownComponent Menu"
        description="DropdownMenu is being phased out. You can achieve the same outcome by composing DropdownComponent components."
      >
        <div style={{ maxWidth: "300px" }}>
          <DropdownComponent id="dropdown-menu" autoPosition block>
            <DropdownComponent.Trigger useSelect>
              Select an option...
            </DropdownComponent.Trigger>

            {createContentWithItems({})}
          </DropdownComponent>
        </div>
      </StoryItem>

      <StoryItem
        title="DropdownComponent (with other components as content)"
        description="We can compose dropdowns with various components."
      >
        <div style={{ maxWidth: "300px" }}>
          <DropdownComponent id="dropdown-menu" block>
            <DropdownComponent.Trigger useSelect>
              <StatusIndicator color="green" label="Status 2" medium />
            </DropdownComponent.Trigger>

            <DropdownComponent.Content collapse top full>
              <DropdownComponent.Action action={() => {}} overflow>
                <StatusIndicator
                  color="red"
                  label="Status 1"
                  medium
                  softLabel
                />
              </DropdownComponent.Action>
              <DropdownComponent.Action action={() => {}} overflow selected>
                <StatusIndicator
                  color="green"
                  label="Status 2"
                  medium
                  softLabel
                />
              </DropdownComponent.Action>
              <DropdownComponent.Action action={() => {}} overflow>
                <StatusIndicator
                  color="purple"
                  label="Status 3"
                  medium
                  softLabel
                />
              </DropdownComponent.Action>
            </DropdownComponent.Content>
          </DropdownComponent>
        </div>
      </StoryItem>
    </div>
  );
}

Dropdown.parameters = {
  controls: { hideNoControlsWarning: true },
};
