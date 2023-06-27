import { cleanup, render, fireEvent } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/ColField/ColField' or its ... Remove this comment to see the full error message
import ColField from "lib/ColField/ColField";
// @ts-expect-error TS(2307): Cannot find module 'tests/setup' or its correspond... Remove this comment to see the full error message
import { React } from "tests/setup";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("ColField", () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const labelChange = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const instructionChange = jest.fn();
  const defaultProps = {
    editable: true,
    labelChange,
    instructionChange,
    label: "Howdy",
    instructions: "Some fun instructions",
    instructionPlaceholder: "Enter field instructions",
  };
  const renderWrapper = (props = defaultProps) =>
    render(
      <ColField>
        <ColField.Header>
          <ColField.Label
            editable={props.editable}
            onChange={props.labelChange}
            label={props.label}
          />
        </ColField.Header>
        <ColField.Body>
          <div className="py-5 px-6 text-center">field body hello!</div>
        </ColField.Body>
        <ColField.Footer>
          <ColField.Instructions
            editable={props.editable}
            onChange={props.instructionChange}
            placeholder={props.instructionPlaceholder}
            instructions={props.instructions}
          />
        </ColField.Footer>
      </ColField>
    );

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cleanup();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.restoreAllMocks();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.clearAllMocks();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the editable field label", () => {
    const { getByText, getByLabelText } = renderWrapper();
    fireEvent.click(getByText(defaultProps.label));
    const labelInput = getByLabelText(
      `edit field label: ${defaultProps.label}`
    );
    fireEvent.change(labelInput, {
      target: {
        value: "Meowdy",
      },
    });
    labelInput.blur();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(labelChange).toHaveBeenCalledWith("Meowdy");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the editable field instructions", () => {
    const { getByText, getByPlaceholderText } = renderWrapper();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.instructions));
    const instructionsInput = getByPlaceholderText(
      defaultProps.instructionPlaceholder
    );
    fireEvent.change(instructionsInput, {
      target: {
        value: "add some lovely text",
      },
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(instructionChange).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the non-editable field label", () => {
    const { getByText, queryByText } = renderWrapper({
      ...defaultProps,
      editable: false,
    });
    fireEvent.click(getByText(defaultProps.label));
    const labelInput = queryByText(`edit field label: ${defaultProps.label}`);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(labelInput).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the non-editable field instructions", () => {
    const { getByText, queryByPlaceholderText } = renderWrapper({
      ...defaultProps,
      editable: false,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText(defaultProps.instructions));
    const instructionsInput = queryByPlaceholderText(
      defaultProps.instructionPlaceholder
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(instructionsInput).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the field body", () => {
    const { getByText } = renderWrapper();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(getByText("field body hello!"));
  });
});
