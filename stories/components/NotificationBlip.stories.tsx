import React from "react";
import { Button, ButtonIcon } from "../../lib";
import { Icon } from "../../lib";
import NotificationBlipComponent from "../../lib/Notification/blip/NotificationBlip";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: 'GUI/Notification Blip',
  component: NotificationBlipComponent,
};

export const NotificationBlip = (args: any) => <>
  <StoryItem
    title="Notification blip"
    description="A visual indicator to inform the user they have notifications"
  >
    <ButtonIcon name={'bell'}>
      <NotificationBlipComponent />
    </ButtonIcon>
  </StoryItem>
</>;