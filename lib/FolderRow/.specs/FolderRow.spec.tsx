import { describe, expect, it } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FolderRow } from "../";
import { FolderRowName } from "../FolderRowName";

describe("FolderRow", () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(<FolderRow {...props}>{ui}</FolderRow>);

  it("rendering folder name", () => {
    const { getByText } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(getByText(/folder name/i));
  });

  it("showing the toggle action", () => {
    const { getByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(getByTitle(FolderRowName.defaultProps.toggleTitle));
  });

  it("hiding the toggle action", () => {
    const { queryByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name showToggle={false}>Folder name</FolderRow.Name>
    ));

    expect(queryByTitle(FolderRowName.defaultProps.toggleTitle)).toBeNull();
  });

  it("rendering the folder contents", () => {
    const { getByText, queryByText, getByTitle } = renderWrapper(
      (show: any, setShow: any) => (
        // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Inne... Remove this comment to see the full error message
        <FolderRow.Inner>
          {/* @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message */}
          <FolderRow.Name show={show} setShow={setShow}>
            folder name
            {/* @ts-expect-error */}
          </FolderRow.Name>
          {/* @ts-expect-error TS(2339): Property 'Contents' does not exist on type 'typeof... Remove this comment to see the full error message */}
          <FolderRow.Contents show={show}>contents</FolderRow.Contents>
          {/* @ts-expect-error */}
        </FolderRow.Inner>
      )
    );

    expect(queryByText(/contents/i)).toBeNull();
    fireEvent.click(getByTitle(FolderRowName.defaultProps.toggleTitle));

    expect(getByText(/contents/i));
  });
});
