import { cleanup, render, fireEvent } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { InputConfirmationModal } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'tests/setup' or its correspond... Remove this comment to see the full error message
import { React } from "tests/setup";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("InputConfirmationModal", () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onConfirmSpy = jest.fn();
  const defaultProps = {
    onConfirm: onConfirmSpy,
    introTitle: "Do a delete",
    confirmTitle: "Confirm a delete",
    introBody: "ready to delete something?",
    confirmBody: "are you sure you are sure?",
    show: true,
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onHide: jest.fn(),
  };

  const renderWrapper = (props = defaultProps) =>
    render(<InputConfirmationModal {...props} />);

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cleanup();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.restoreAllMocks();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.clearAllMocks();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("makes you confirm by typing the keyword", () => {
    const { getByText, getByPlaceholderText } = renderWrapper();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.introTitle));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText("Confirm"));

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.confirmTitle));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.confirmBody));
    fireEvent.click(getByText("Delete"));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onConfirmSpy).not.toBeCalled();

    const confirmInput = getByPlaceholderText("Type DELETE to confirm");
    fireEvent.change(confirmInput, {
      target: {
        value: "PLOP",
      },
    });
    fireEvent.click(getByText("Delete"));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onConfirmSpy).not.toBeCalled();

    fireEvent.change(confirmInput, {
      target: {
        value: "DELETE",
      },
    });
    fireEvent.click(getByText("Delete"));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onConfirmSpy).toBeCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("lets you skip the confirmation", () => {
    const { getByText } = renderWrapper({
      ...defaultProps,
      // @ts-expect-error TS(2345): Argument of type '{ skipConfirm: boolean; onConfir... Remove this comment to see the full error message
      skipConfirm: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.introTitle));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText("Delete"));
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onConfirmSpy).toBeCalled();
  });
});
