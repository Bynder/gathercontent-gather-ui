import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import FormInput from "../FormInput";

describe("FormInput", () => {
  it("renders the input that calls a prop on change", () => {
    const onInputChange = vi.fn();
    render(
      <FormInput onInputChange={onInputChange} placeholder="Input friend" />
    );
    expect(
      screen
        .getByPlaceholderText("Input friend")
        .classList.contains("gui-form__input--has-error")
    ).toBeFalsy();

    fireEvent.change(screen.getByPlaceholderText("Input friend"), {
      target: { value: "Hey friend!" },
    });

    expect(onInputChange).toHaveBeenCalled();
  });

  it("displays an error message", () => {
    render(
      <FormInput
        placeholder="yikes"
        hasError
        errorMessage="A big oof has happened"
      />
    );
    expect(
      screen
        .getByPlaceholderText("yikes")
        .classList.contains("gui-form__input--has-error")
    ).toBeTruthy();
    expect(screen.getByText("A big oof has happened"));
  });
});
