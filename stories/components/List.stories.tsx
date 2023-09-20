import React from "react";
import {
  List as ListComponent,
  ListItem,
  ItemRow,
  StatusIndicator,
  Button,
  Icon,
  TooltipWrapper,
} from "lib";
import StoryItem from "../styleguide/StoryItem";

const addNewItemButton = (
  size: any,
  placement: any,
  id: any,
  tooltipText: any
) => (
  <TooltipWrapper id={id} tooltipText={tooltipText} placement={placement}>
    <Button types={["icon-only"]} clickHandler={() => {}}>
      {/* @ts-expect-error */}
      <Icon size={size} name="plus" />
    </Button>
  </TooltipWrapper>
);

const statusWithTooltip = (
  color: any,
  placement: any,
  id: any,
  tooltipText: any
) => (
  <TooltipWrapper id={id} tooltipText={tooltipText} placement={placement}>
    <StatusIndicator color={color} />
  </TooltipWrapper>
);

const overdueTitle = (title: any, id: any) => (
  <TooltipWrapper id={id} tooltipText="Overdue">
    <span className="color-overdue">{title}</span>
  </TooltipWrapper>
);

export default {
  title: "Legacy/List",
};

export function List() {
  return (
    <div>
      <StoryItem
        title="List"
        description="A list has a header with a title and action & children."
      >
        <ListComponent
          title="Project Name"
          action={addNewItemButton("minor", "bottom", "id-1", "Add new item")}
        >
          <ListItem>List item text</ListItem>
          <ListItem
            // @ts-expect-error
            action={addNewItemButton(
              "small",
              "bottom",
              "id-2",
              "Add entry item"
            )}
            isCurrent
          >
            List item text
            <ListComponent>
              <ListItem>List item text</ListItem>
              <ListItem>List item text</ListItem>
            </ListComponent>
          </ListItem>
        </ListComponent>
      </StoryItem>

      <StoryItem title="List (boarded)">
        <ListComponent
          title="Project Name"
          action={addNewItemButton(
            "minor",
            "bottom",
            "id-12312312",
            "Add new item"
          )}
          bordered
        >
          {/* @ts-expect-error */}
          <ListItem isCurrent>List item text</ListItem>
          <ListItem>List item text</ListItem>
        </ListComponent>
      </StoryItem>

      <StoryItem title="List: Full Example">
        <ListComponent
          title="Example Project Title"
          action={addNewItemButton(
            "minor-2",
            "bottom",
            "id-32365689",
            "Add new item"
          )}
          borderedRight
        >
          <ListItem
            // @ts-expect-error
            action={addNewItemButton(
              "small-2",
              "bottom",
              "id-121212",
              "Add entry item"
            )}
            collapse
            isCurrent
          >
            <a href="/#">
              <ItemRow
                // @ts-expect-error TS(2322): Type '{ children: string; indicator: Element; }' i... Remove this comment to see the full error message
                indicator={statusWithTooltip(
                  "green",
                  "bottom",
                  "id-896727",
                  "Research"
                )}
              >
                Item name 1
              </ItemRow>
            </a>

            <ListComponent>
              {/* @ts-expect-error */}
              <ListItem collapse>
                <a href="/#">
                  <ItemRow
                    // @ts-expect-error TS(2322): Type '{ children: string; indicator: Element; }' i... Remove this comment to see the full error message
                    indicator={statusWithTooltip(
                      "blue",
                      "bottom",
                      "id-12376887",
                      "Review"
                    )}
                  >
                    Item name 2
                  </ItemRow>
                </a>
              </ListItem>
              {/* @ts-expect-error */}
              <ListItem collapse>
                <a href="/#">
                  <ItemRow
                    // @ts-expect-error TS(2322): Type '{ children: Element; indicator: Element; }' ... Remove this comment to see the full error message
                    indicator={statusWithTooltip(
                      "orange",
                      "bottom",
                      "id-9356342",
                      "Publish"
                    )}
                  >
                    {overdueTitle("Item name 3", "id-78978984224")}
                  </ItemRow>
                </a>

                <ListComponent>
                  {/* @ts-expect-error */}
                  <ListItem collapse>
                    <a href="/#">
                      <ItemRow
                        // @ts-expect-error TS(2322): Type '{ children: string; indicator: Element; }' i... Remove this comment to see the full error message
                        indicator={statusWithTooltip(
                          "blue",
                          "bottom",
                          "id-7858757",
                          "Review"
                        )}
                      >
                        Item name 4
                      </ItemRow>
                    </a>
                  </ListItem>
                  {/* @ts-expect-error */}
                  <ListItem collapse>
                    <a href="/#">
                      <ItemRow
                        // @ts-expect-error TS(2322): Type '{ children: Element; indicator: Element; }' ... Remove this comment to see the full error message
                        indicator={statusWithTooltip(
                          "orange",
                          "bottom",
                          "id-4444234",
                          "Publish"
                        )}
                      >
                        {overdueTitle("Item name 5", "id-24288448")}
                      </ItemRow>
                    </a>
                  </ListItem>
                </ListComponent>
              </ListItem>
            </ListComponent>
          </ListItem>
        </ListComponent>
      </StoryItem>

      <StoryItem title="Bordered List: Full Example">
        <ListComponent
          title="Project Name"
          action={addNewItemButton(
            "minor",
            "bottom",
            "id-12312312",
            "Add new item"
          )}
          bordered
          borderedLeft
        >
          {/* @ts-expect-error */}
          <ListItem isCurrent>
            <ItemRow
              // @ts-expect-error TS(2322): Type '{ children: string; indicator: Element; stac... Remove this comment to see the full error message
              indicator={
                <StatusIndicator
                  label="Approved"
                  color="green"
                  preText="Status:"
                  small
                  softLabel
                />
              }
              stacked
            >
              1st August 2018, 10:32am
            </ItemRow>
          </ListItem>
          <ListItem>
            <ItemRow
              // @ts-expect-error TS(2322): Type '{ children: string; indicator: Element; stac... Remove this comment to see the full error message
              indicator={
                <StatusIndicator
                  label="Approved"
                  color="green"
                  preText="Status:"
                  small
                  softLabel
                />
              }
              stacked
            >
              1st August 2018, 10:32am
            </ItemRow>
          </ListItem>
        </ListComponent>
      </StoryItem>
    </div>
  );
}
List.parameters = {
  controls: { hideNoControlsWarning: true },
};
