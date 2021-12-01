import React from 'react';
import { boolean, object, text } from '@storybook/addon-knobs';
import { Pill } from 'lib';
import { ItemRow, StatusIndicator, TooltipWrapper } from '../../index';
import notes from '../README.md';
import Icon from '../../Icon';
import { AvatarGroupMock } from '../../Avatar/stories/AvatarGroupMock';
import { DragLine } from '../../DnD/DragLine';
import StoryItem from '../../../stories/styleguide/StoryItem';

const createStatusIndicator = (props) => (
  <TooltipWrapper
    id="status-tooltip"
    tooltipText="tooltip text"
    wrapperClassName="h-margin-right-half"
  >
    <StatusIndicator {...props} />
  </TooltipWrapper>
);

export default {
  title: 'Components',
};

export const _ItemRow = () => {
  const stacked = boolean('Stacked', false);
  const bordered = boolean('Bordered', true);
  const commentCount = text('Comment count', 0);
  const templateName = text('Template name', '');
  const draggedAbove = boolean('Dragged above', false);
  const draggedBelow = boolean('Dragged below', false);

  let alignment = '';

  if (draggedAbove) {
    alignment = 'top';
  } else if (draggedBelow) {
    alignment = 'bottom';
  }

  return (
    <>
      <StoryItem title="ItemRow" description="The basic item row">
        <ItemRow
          bordered={bordered}
          stacked={stacked}
          style={{
            position: 'relative',
          }}
        >
          {(draggedAbove || draggedBelow) && (
            <DragLine alignment={alignment} offsetPx={2} />
          )}
          <ItemRow.Name>
            {!stacked &&
              createStatusIndicator(
                object('Status', {
                  label: '',
                  color: 'green',
                  preText: '',
                  small: false,
                  softLabel: false,
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
                    className: '',
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
      </StoryItem>
      <StoryItem title="ItemRow list" description="ItemRow with list styling">
        <ItemRow list>
          <ItemRow.Name>
            {createStatusIndicator({ color: 'green' })}
            Item name 1
          </ItemRow.Name>
        </ItemRow>
        <ItemRow list>
          <ItemRow.Name>
            {createStatusIndicator({ color: 'green' })}
            Really really really really really really really really really
            really really really really really really really really really
            really really really really really really really really really
            really really long Item name
          </ItemRow.Name>
        </ItemRow>
        <ItemRow list>
          <ItemRow.Name>
            {createStatusIndicator({ color: 'blue' })}
            Item name 3
          </ItemRow.Name>
        </ItemRow>
        <ItemRow list>
          <ItemRow.Name>
            {createStatusIndicator({ color: 'green' })}
            Item name 4
          </ItemRow.Name>
          <ItemRow.Aside>
            <Pill size={Pill.sizes.xs}>TRASHED</Pill>
          </ItemRow.Aside>
        </ItemRow>
        <ItemRow list>
          <ItemRow.Name>
            {createStatusIndicator({ color: 'red' })}
            Another really really really really really really really really
            really really really really really really really really really
            really really really really really really really really really
            really really really long Item name
          </ItemRow.Name>
          <ItemRow.Aside>
            <Pill size={Pill.sizes.xs}>TRASHED</Pill>
          </ItemRow.Aside>
        </ItemRow>
      </StoryItem>
    </>
  );
};

_ItemRow.story = {
  parameters: {
    notes: { markdown: notes },
  },
};
