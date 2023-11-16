import React from "react";
import { ButtonIcon } from "../../lib";
import { NotificationBlip as NotificationBlipComponent } from "../../lib/Notification/blip/NotificationBlip";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: 'GUI/Notification Blip',
  component: NotificationBlipComponent,
  args: {
    visible: true,
  }
};

export const NotificationBlip = (args: any) => <>
  <StoryItem
    title="Notification blip"
    description="A visual indicator to inform the user they have notifications"
  >
    <NotificationBlipComponent visible={args.visible} className={args.className}>
      <ButtonIcon name={'bell'} />
    </NotificationBlipComponent>
  </StoryItem>
</>;