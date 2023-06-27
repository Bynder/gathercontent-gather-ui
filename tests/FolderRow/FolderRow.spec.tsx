import { cleanup, render, fireEvent } from "@testing-library/react";
import { React } from "../setup";
import { FolderRow } from "../../lib";
import { FolderRowName } from "../../lib/FolderRow/FolderRowName";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FolderRow", () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(<FolderRow {...props}>{ui}</FolderRow>);

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cleanup();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering folder name", () => {
    const { getByText } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(/folder name/i)).toBeInTheDocument();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("showing the toggle action", () => {
    const { getByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      getByTitle(FolderRowName.defaultProps.toggleTitle)
    ).toBeInTheDocument();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("hiding the toggle action", () => {
    const { queryByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name showToggle={false}>Folder name</FolderRow.Name>
    ));

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(queryByTitle(FolderRowName.defaultProps.toggleTitle)).toBeNull();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("rendering the folder contents", () => {
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

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(queryByText(/contents/i)).toBeNull();
    fireEvent.click(getByTitle(FolderRowName.defaultProps.toggleTitle));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(/contents/i)).toBeInTheDocument();
  });
});
