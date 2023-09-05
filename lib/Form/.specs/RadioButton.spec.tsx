import { describe, expect, it, vi } from "vitest";

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import RadioButton from "../RadioButton";
import Other from "../RadioButton/Other";

describe("RadioButtons", () => {
  it("renders a radio button", () => {
    // @ts-expect-error TS(2709): Cannot use namespace 'RadioButton' as a type.
    render(<RadioButton id="123" label="Click me" name="input name" />);
    expect(screen.getByLabelText("Click me").getAttribute("type")).toEqual(
      "radio"
    );
  });

  it('renders an unchecked "other" radio button that fires a change handler', () => {
    const onChangeHandler = vi.fn();
    render(
      <Other
        name="foo"
        id="4"
        label="Something else"
        onChangeHandler={onChangeHandler}
        onTextChangeHandler={() => {}}
      />
    );
    fireEvent.click(screen.getByLabelText("Something else"));
    expect(onChangeHandler).toHaveBeenCalled();
  });

  it('renders a checked "other" radio button that displays an input', () => {
    const onTextChangeHandler = vi.fn();
    render(
      <Other
        name="foo"
        id="4"
        label="Something else"
        onChangeHandler={() => {}}
        onTextChangeHandler={onTextChangeHandler}
        checked
      />
    );
    fireEvent.change(screen.getByPlaceholderText("Something else"), {
      target: { value: "Other!" },
    });

    expect(onTextChangeHandler).toHaveBeenCalled();
  });
});
