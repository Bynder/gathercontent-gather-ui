import React from "react";
import cx from "classnames";
import StoryItem from "../../../stories/styleguide/StoryItem";
import {
  FolderRow as FolderRowComponent,
  TooltipWrapper,
  Icon,
  Button,
} from "../../index";

const actions = (
  <>
    {/* @ts-expect-error TS(2339): Property 'Action' does not exist on type 'typeof F... Remove this comment to see the full error message */}
    <FolderRowComponent.Action>
      <TooltipWrapper
        id="new folder"
        tooltipText="New folder"
        className="gui-folder-row__action"
        placement="top"
      >
        <Button types={["icon-only"]} onClick={() => {}}>
          <Icon name="folderNew" />
        </Button>
      </TooltipWrapper>
      {/* @ts-expect-error TS(2339): Property 'Action' does not exist on type 'typeof F... Remove this comment to see the full error message */}
    </FolderRowComponent.Action>
    {/* @ts-expect-error TS(2339): Property 'Action' does not exist on type 'typeof F... Remove this comment to see the full error message */}
    <FolderRowComponent.Action>
      <TooltipWrapper
        id="delete folder"
        tooltipText="Delete folder"
        className="gui-folder-row__action"
        placement="top"
      >
        <Button types={["icon-only"]} onClick={() => {}}>
          <Icon name="trash" />
        </Button>
      </TooltipWrapper>
      {/* @ts-expect-error TS(2339): Property 'Action' does not exist on type 'typeof F... Remove this comment to see the full error message */}
    </FolderRowComponent.Action>
  </>
);

export default {
  title: "Legacy/Folder Row",
  component: FolderRowComponent,
  args: {
    open: true,
    draggedOver: false,
    showToggle: true,
    folderName: "Folder name",
    meta: "100 items",
  },
};

export function FolderRow({
  open,
  draggedOver,
  showToggle,
  folderName,
  meta,
}: any) {
  const classNameInner = cx("gui-folder-row__inner", {
    "gui-folder-row__inner-dragged-insert": draggedOver,
  });

  const classNameLine = cx("gui-hierarchy-line", {
    "dragged-insert": draggedOver,
  });

  return (
    <StoryItem title="Folder Row">
      <FolderRowComponent open={open}>
        {() => (
          <>
            {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
            <FolderRowComponent.Inner className={classNameInner}>
              {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
              <FolderRowComponent.Name showToggle={showToggle}>
                <p className="gui-h-margin-clear">{folderName}</p>
                {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
              </FolderRowComponent.Name>

              {/* @ts-expect-error TS(2339): Property 'Aside' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
              <FolderRowComponent.Aside>
                {/* @ts-expect-error TS(2339): Property 'Cell' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
                <FolderRowComponent.Cell>{actions}</FolderRowComponent.Cell>

                {/* @ts-expect-error TS(2339): Property 'Cell' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
                <FolderRowComponent.Cell meta>{meta}</FolderRowComponent.Cell>
                {/* @ts-expect-error TS(2339): Property 'Aside' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
              </FolderRowComponent.Aside>
              {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
            </FolderRowComponent.Inner>

            {/* @ts-expect-error TS(2339): Property 'Contents' does not exist on type 'typeof... Remove this comment to see the full error message */}
            <FolderRowComponent.Contents
              style={{ position: "relative", height: "150px" }}
            >
              <span
                className={classNameLine}
                style={{
                  top: "0",
                  left: "20px",
                  height: "100px",
                }}
              />
              {/* @ts-expect-error TS(2339): Property 'Contents' does not exist on type 'typeof... Remove this comment to see the full error message */}
            </FolderRowComponent.Contents>
          </>
        )}
      </FolderRowComponent>
    </StoryItem>
  );
}
