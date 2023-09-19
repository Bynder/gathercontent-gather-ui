import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, fireEvent } from "@testing-library/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/ColField/ColField' or its ... Remove this comment to see the full error message
import ColField from "lib/ColField/ColField";
import React from "react";

describe("ColField", () => {
  const labelChange = vi.fn();

  const instructionChange = vi.fn();
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

  afterEach(() => {
    cleanup();

    vi.restoreAllMocks();

    vi.clearAllMocks();
  });

  it("displays the editable field label", () => {
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

    expect(labelChange).toHaveBeenCalledWith("Meowdy");
  });

  it("displays the editable field instructions", () => {
    const { getByText, getByPlaceholderText } = renderWrapper();

    expect(getByText(defaultProps.instructions));
    const instructionsInput = getByPlaceholderText(
      defaultProps.instructionPlaceholder
    );
    fireEvent.change(instructionsInput, {
      target: {
        value: "add some lovely text",
      },
    });

    expect(instructionChange).toHaveBeenCalled();
  });

  it("displays the non-editable field label", () => {
    const { getByText, queryByText } = renderWrapper({
      ...defaultProps,
      editable: false,
    });
    fireEvent.click(getByText(defaultProps.label));
    const labelInput = queryByText(`edit field label: ${defaultProps.label}`);

    expect(labelInput).toEqual(null);
  });

  it("displays the non-editable field instructions", () => {
    const { getByText, queryByPlaceholderText } = renderWrapper({
      ...defaultProps,
      editable: false,
    });

    expect(getByText(defaultProps.instructions));
    const instructionsInput = queryByPlaceholderText(
      defaultProps.instructionPlaceholder
    );

    expect(instructionsInput).toEqual(null);
  });

  it("displays the field body", () => {
    const { getByText } = renderWrapper();

    expect(getByText("field body hello!"));
  });
});
