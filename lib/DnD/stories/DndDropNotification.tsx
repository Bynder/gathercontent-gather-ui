import React, { useContext } from "react";
import { action } from "@storybook/addon-actions";
import { Droppable } from "../Droppable";
import NotificationBar from "../../Notification/bar";
import { DndContext } from "../DndProvider";
import { ItemRow } from "../../ItemRow";

function Message({ children, canDrop, isOver, isDragging }: any) {
  let level = "information";

  if (isDragging && canDrop) {
    level = "warning";
  }

  if (isDragging && isOver) {
    level = "success";
  }

  if (isDragging && isOver && !canDrop) {
    level = "danger";
  }

  return (
    <NotificationBar level={level} style={{ height: "200px" }}>
      {children}
    </NotificationBar>
  );
}

function DndDropNotification() {
  const { isDragging, setFailurePreview }: any = useContext(DndContext);

  const failurePreview = (
    <div style={{ maxWidth: "300px" }}>
      <ItemRow bordered>
        <ItemRow.Name>You cannot drag folders into here!</ItemRow.Name>
      </ItemRow>
    </div>
  );

  return (
    <Droppable
      acceptDragTypes={["item", "folder"]}
      onDrop={action("something was dropped")}
      canDropChecker={({ type }: any, monitor: any) => {
        const typeIsItem = type === "item";

        if (!typeIsItem) {
          setFailurePreview(failurePreview);
        }

        if (!monitor.isOver()) {
          setFailurePreview(null);
        }

        return typeIsItem;
      }}
    >
      {({ canDrop, isOver }: any, defineDropRef: any) => (
        <div ref={defineDropRef} className="h-margin-top">
          <Message isDragging={isDragging} isOver={isOver} canDrop={canDrop}>
            {(!isDragging || (!canDrop && !isOver)) &&
              "Start by dragging items in here."}
            {isDragging && !isOver && canDrop && "Drag it here."}
            {isDragging && isOver && canDrop && "Drop it!"}
            {isDragging && isOver && !canDrop && "You cannot drag here!"}
          </Message>
        </div>
      )}
    </Droppable>
  );
}

export { DndDropNotification };
