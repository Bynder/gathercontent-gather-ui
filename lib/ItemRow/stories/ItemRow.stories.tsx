import React from "react";
import { Pill } from "lib";
import {
  ItemRow as ItemRowComponent,
  StatusIndicator,
  TooltipWrapper,
} from "../../index";
import Icon from "../../Icon";
import { AvatarGroupMock } from "../../Avatar/stories/AvatarGroupMock";
import { DragLine } from "../../DnD/DragLine";
import StoryItem from "../../../stories/styleguide/StoryItem";

const createStatusIndicator = (props: any) => (
  <TooltipWrapper
    id="status-tooltip"
    tooltipText="tooltip text"
    wrapperClassName="gui-h-margin-right-half"
  >
    <StatusIndicator {...props} />
  </TooltipWrapper>
);

export default {
  title: "Legacy/Item Row",
  component: ItemRowComponent,
  args: {
    stacked: false,
    bordered: true,
    draggedAbove: false,
    draggedBelow: false,
    showParticipants: false,
    commentCount: 0,
    templateName: "",
    itemName: "Item name",
  },
};

export function ItemRow({
  stacked,
  bordered,
  draggedAbove,
  draggedBelow,
  commentCount,
  templateName,
  showParticipants,
  itemName,
}: any) {
  let alignment = "";

  if (draggedAbove) {
    alignment = "top";
  } else if (draggedBelow) {
    alignment = "bottom";
  }

  return (
    <>
      <StoryItem title="ItemRowComponent" description="The basic item row">
        <ItemRowComponent
          bordered={bordered}
          stacked={stacked}
          style={{
            position: "relative",
          }}
        >
          {(draggedAbove || draggedBelow) && (
            <DragLine alignment={alignment} offsetPx={2} />
          )}
          <ItemRowComponent.Name>
            {!stacked &&
              createStatusIndicator({
                label: "",
                color: "green",
                preText: "",
                small: false,
                softLabel: false,
              })}
            {itemName}
          </ItemRowComponent.Name>

          <ItemRowComponent.Aside>
            {stacked && (
              <ItemRowComponent.Data>
                {createStatusIndicator({
                  label: "live",
                  color: "green",
                  preText: "Status",
                  small: true,
                  softLabel: false,
                  className: "",
                })}
              </ItemRowComponent.Data>
            )}

            {templateName && (
              <ItemRowComponent.Data>{templateName}</ItemRowComponent.Data>
            )}

            {showParticipants && (
              <AvatarGroupMock avatarProps={{ smallSize: true }} minCount={3}>
                {({ ui, count }: any) =>
                  count ? (
                    <ItemRowComponent.Data>{ui}</ItemRowComponent.Data>
                  ) : null
                }
              </AvatarGroupMock>
            )}

            {!!commentCount && (
              <ItemRowComponent.Data>
                <Icon
                  name="commentFill"
                  className="gui-h-margin-right-quarter"
                />
                {commentCount}
              </ItemRowComponent.Data>
            )}
          </ItemRowComponent.Aside>
        </ItemRowComponent>
      </StoryItem>
      <StoryItem
        title="ItemRowComponent list"
        description="ItemRowComponent with list styling"
      >
        <ItemRowComponent list>
          <ItemRowComponent.Name>
            {createStatusIndicator({ color: "green" })}
            Item name 1
          </ItemRowComponent.Name>
        </ItemRowComponent>
        <ItemRowComponent list>
          <ItemRowComponent.Name>
            {createStatusIndicator({ color: "green" })}
            Really really really really really really really really really
            really really really really really really really really really
            really really really really really really really really really
            really really long Item name
          </ItemRowComponent.Name>
        </ItemRowComponent>
        <ItemRowComponent list>
          <ItemRowComponent.Name>
            {createStatusIndicator({ color: "blue" })}
            Item name 3
          </ItemRowComponent.Name>
        </ItemRowComponent>
        <ItemRowComponent list>
          <ItemRowComponent.Name>
            {createStatusIndicator({ color: "green" })}
            Item name 4
          </ItemRowComponent.Name>
          <ItemRowComponent.Aside>
            <Pill size={Pill.sizes.xs}>TRASHED</Pill>
          </ItemRowComponent.Aside>
        </ItemRowComponent>
        <ItemRowComponent list>
          <ItemRowComponent.Name>
            {createStatusIndicator({ color: "red" })}
            Another really really really really really really really really
            really really really really really really really really really
            really really really really really really really really really
            really really really long Item name
          </ItemRowComponent.Name>
          <ItemRowComponent.Aside>
            <Pill size={Pill.sizes.xs}>TRASHED</Pill>
          </ItemRowComponent.Aside>
        </ItemRowComponent>
      </StoryItem>
    </>
  );
}
