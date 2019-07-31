import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import { ItemRow, StatusIndicator } from '../../index';
import AvatarGroup from '../../Avatar/AvatarGroup';
import Avatar from '../../Avatar';
import notes from '../README.md';

const createAvatarGroup = () => (
  <AvatarGroup>
    <Avatar smallSize initials="RS" name="Richard Swagshaw" bordered />
    <Avatar smallSize initials="JD" name="James Darracott" bordered />
  </AvatarGroup>
);

const createStatusIndicator = props => <StatusIndicator {...props} />;

storiesOf('Components', module).add(
  'Item Row',
  () => (
    <ItemRow
      label={text('Label', '')}
      commentCount={text('Comment count', '5')}
      bordered={boolean('Bordered', true)}
      stacked={boolean('Stacked', false)}
    >
      <ItemRow.Name
        status={createStatusIndicator(
          object('Status', {
            label: '',
            color: 'green',
            preText: '',
            small: false,
            softLabel: false
          })
        )}
      >
        {text('Name', 'Item name')}
      </ItemRow.Name>

      <ItemRow.Aside>
        {boolean('Show participants', false) && (
          <ItemRow.Data>{createAvatarGroup()}</ItemRow.Data>
        )}
      </ItemRow.Aside>
    </ItemRow>
  ),
  {
    notes: { markdown: notes }
  }
);
