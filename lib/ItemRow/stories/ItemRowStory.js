import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { ItemRow, StatusIndicator } from '../../index';
import AvatarGroup from '../../Avatar/AvatarGroup';
import Avatar from '../../Avatar';

const createAvatarGroup = () => (
  <AvatarGroup>
    <Avatar smallSize initials="RS" name="Richard Swagshaw" bordered />
    <Avatar smallSize initials="JD" name="James Darracott" bordered />
  </AvatarGroup>
);

storiesOf('Components', module).add('Item Row', () => (
  <div>
    <StoryItem title="Item Row">
      <ItemRow indicator={<StatusIndicator color="green" />} label="label text">
        <a href="/#">Item name 2</a>
      </ItemRow>
    </StoryItem>

    <StoryItem title="Item Row with comment count">
      <ItemRow indicator={<StatusIndicator color="green" />} commentCount={5}>
        <a href="/#">Item name 2</a>
      </ItemRow>
    </StoryItem>

    <StoryItem title="Stacked item row">
      <ItemRow
        indicator={
          <StatusIndicator
            label="Approved"
            color="green"
            preText="Status:"
            small
            softLabel
          />
        }
        participants={createAvatarGroup()}
        stacked
      >
        1st August 2018, 10:32am
      </ItemRow>
    </StoryItem>
  </div>
));
