import { cleanup, render, fireEvent } from "@testing-library/react";
import { React } from "../setup";
import { FolderRow } from "../../lib";
import { FolderRowName } from "../../lib/FolderRow/FolderRowName";

describe("FolderRow", () => {
  const renderWrapper = (ui: any, props = {}) =>
    render(<FolderRow {...props}>{ui}</FolderRow>);

  afterEach(() => {
    cleanup();
  });

  test("rendering folder name", () => {
    const { getByText } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(getByText(/folder name/i)).toBeInTheDocument();
  });

  test("showing the toggle action", () => {
    const { getByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name>Folder name</FolderRow.Name>
    ));

    expect(
      getByTitle(FolderRowName.defaultProps.toggleTitle)
    ).toBeInTheDocument();
  });

  test("hiding the toggle action", () => {
    const { queryByTitle } = renderWrapper(() => (
      // @ts-expect-error TS(2694): Namespace 'FolderRow' has no exported member 'Name... Remove this comment to see the full error message
      <FolderRow.Name showToggle={false}>Folder name</FolderRow.Name>
    ));

    expect(queryByTitle(FolderRowName.defaultProps.toggleTitle)).toBeNull();
  });

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

    expect(queryByText(/contents/i)).toBeNull();
    fireEvent.click(getByTitle(FolderRowName.defaultProps.toggleTitle));

    expect(getByText(/contents/i)).toBeInTheDocument();
  });
});
