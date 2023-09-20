import React from "react";
import { FolderRow } from "../../FolderRow";
import { Draggable } from "../Draggable";

function FolderDndMock({ name }: any) {
  const preview = (
    <FolderRow style={{ maxWidth: "300px" }}>
      {() => (
        <>
          {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
          <FolderRow.Inner style={{ minWidth: "320px" }}>
            <div className="folder-row__backdrop" />
            {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
            <FolderRow.Name>{name}</FolderRow.Name>
            {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
          </FolderRow.Inner>
        </>
      )}
    </FolderRow>
  );

  return (
    <Draggable item={{ type: "folder" }} preview={preview}>
      {({ isDragging }: any, dragRef: any) => (
        <div ref={dragRef}>
          <FolderRow
            style={{
              opacity: isDragging ? ".5" : "1",
            }}
          >
            {() => (
              <>
                {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
                <FolderRow.Inner style={{ minWidth: "320px" }}>
                  <div className="folder-row__backdrop" />
                  {/* @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message */}
                  <FolderRow.Name>{name}</FolderRow.Name>
                  {/* @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message */}
                </FolderRow.Inner>
              </>
            )}
          </FolderRow>
        </div>
      )}
    </Draggable>
  );
}

export { FolderDndMock };
