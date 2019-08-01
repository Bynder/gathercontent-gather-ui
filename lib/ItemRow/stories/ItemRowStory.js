import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import { ItemRow, StatusIndicator } from '../../index';
import notes from '../README.md';
import Icon from '../../Icon';
import { AvatarGroupMock } from '../../Avatar/stories/AvatarGroupMock';

const createStatusIndicator = props => <StatusIndicator {...props} />;

storiesOf('Components', module).add(
  'Item Row',
  () => {
    const stacked = boolean('Stacked', false);
    const bordered = boolean('Bordered', true);
    const commentCount = text('Comment count', 0);
    const templateName = text('Template name', '');

    return (
      <ItemRow bordered={bordered} stacked={stacked}>
        <ItemRow.Name>
          {!stacked &&
            createStatusIndicator(
              object('Status', {
                label: '',
                color: 'green',
                preText: '',
                small: false,
                softLabel: false,
                className: 'h-margin-right-half'
              })
            )}
          {text('Name', 'Item name')}
        </ItemRow.Name>

        <ItemRow.Aside>
          {stacked && (
            <ItemRow.Data>
              {createStatusIndicator(
                object('Status (stacked)', {
                  label: 'live',
                  color: 'green',
                  preText: 'Status',
                  small: true,
                  softLabel: false,
                  className: ''
                })
              )}
            </ItemRow.Data>
          )}

          {templateName && <ItemRow.Data>{templateName}</ItemRow.Data>}

          {boolean('Show participants', false) && (
            <AvatarGroupMock avatarProps={{ smallSize: true }} minCount={3}>
              {({ ui, count }) =>
                count ? <ItemRow.Data>{ui}</ItemRow.Data> : null
              }
            </AvatarGroupMock>
          )}

          {!!commentCount && (
            <ItemRow.Data>
              <Icon name="commentFill" className="h-margin-right-quarter" />
              {commentCount}
            </ItemRow.Data>
          )}
        </ItemRow.Aside>
      </ItemRow>
    );
  },
  {
    notes: { markdown: notes }
  }
);
