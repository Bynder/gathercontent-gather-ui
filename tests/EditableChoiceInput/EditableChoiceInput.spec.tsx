import { cleanup, render, fireEvent } from "@testing-library/react";
import { React } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Edita... Remove this comment to see the full error message
import { EditableChoiceInput } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("EditableChoiceInput", () => {
  const defaultProps = {
    type: "radio",
    onChange: () => {},
  };
  const renderWrapper = (props = defaultProps) =>
    render(<EditableChoiceInput {...props} />);

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cleanup();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays a radio input", () => {
    const { container } = renderWrapper();
    const radio = container.querySelector('input[type="radio"]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(radio).toBeInTheDocument();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays a checkbox input", () => {
    const { container } = renderWrapper({ ...defaultProps, type: "checkbox" });
    const checkbox = container.querySelector('input[type="checkbox"]');
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(checkbox).toBeInTheDocument();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays a text input", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy,
    });
    fireEvent.change(getByTestId("editable-choice-text-input"), {
      target: {
        value: "A nice option",
      },
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toBeCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays a readonly text input", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChangeSpy = jest.fn();
    const { getByTestId } = renderWrapper({
      ...defaultProps,
      onChange: onChangeSpy,
      // @ts-expect-error TS(2345): Argument of type '{ onChange: any; readOnly: boole... Remove this comment to see the full error message
      readOnly: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByTestId("editable-choice-text-input")).toBeDisabled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).not.toBeCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the aside", () => {
    const { queryByText, getByText, getByTestId } = renderWrapper({
      ...defaultProps,
      // @ts-expect-error TS(2345): Argument of type '{ aside: boolean; type: string; ... Remove this comment to see the full error message
      aside: <div>howdy!</div>,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(queryByText("howdy!")).toEqual(null);
    const input = getByTestId("editable-choice-text-input");
    fireEvent.mouseEnter(input);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText("howdy!"));
  });
});
